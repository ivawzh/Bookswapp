set search_path = core, public, postgis;

-- Create the function named `search_books` with a text argument named `search`.
create function core.search_books_by_title(search text)
  -- This function will return a set of books from the `books table. The
  -- `setof` part is important to PostGraphile, check out our procedure docs to
  -- learn why.
  returns setof core.books as $$
    -- Write our advanced query as a SQL query!
    select *
    from core.books
    where
      -- Use the `ILIKE` operator on both the `headline` and `body` columns. If
      -- either return true, return the post.
      title ilike ('%' || search || '%')
  -- End the function declaring the language we used as SQL and add the
  -- `STABLE` marker so PostGraphile knows its a query and not a mutation.
  $$ language sql stable;

-- Create the function named `search_books_by_location with numeric args for lat and long
create function core.search_books_near_lat_long(lat float, long float)
  -- This function will return a set of books from the `books table. The
  -- `setof` part is important to PostGraphile, check out our procedure docs to
  -- learn why.
  returns setof core.books as $$
    -- Write our advanced query as a SQL query!
    select * from core.books where owner_id in (
      select core.users.id from core.users inner join (
        select id, ST_Distance(location, ST_SetSRID(ST_Point(long, lat),4326)) as distance
        from core.places
        order by distance
      ) place_distance on core.users.address_id = place_distance.id
    )

      -- Use the `ILIKE` operator on both the `headline` and `body` columns. If
      -- either return true, return the post.
      
  -- End the function declaring the language we used as SQL and add the
  -- `STABLE` marker so PostGraphile knows its a query and not a mutation.
  $$ language sql stable;
