import React, { PureComponent } from 'react'; 

export default class extends PureComponent { 
  render() { 
    return (
      <div>
        <div id="sm-nav-container" className="absolute dn-ns w-100 h-100" style={{display: 'none'}}>
          <nav id="sm-nav-bg" className="w-100 h-100">
            <div id="closeNav" className="toggle tr db"></div>
            <a className="tc db pa3" href="/"></a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/about.html">About</a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/#products">Products</a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/research.html">Research</a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/install.html">Install</a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/contribute.html">Contribute</a>
            <a className="tc db pa3 link white ttu tracked f3 b" href="/contact.html">Contact</a>
          </nav>
        </div>

        <div className="relative flex content-center justify-center">
          <div className="flex-auto">
            <header>
              <nav className="absolute w-100 w-auto-ns dt pa4-l pa3-m">
                <a className="dtc pr3-ns pl0-ns pl3 pt0-ns pt3 w-auto-ns w-25" href="/"></a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/about.html">About</a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/#products">Products</a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/research.html">Research</a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/install.html">Install</a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/contribute.html">Contribute</a>
                <a className="dtc-ns dn ph3 link white ttu tracked f6 b" href="/contact.html">Contact</a>
                <div id="openNav" className="toggle dn-ns dtc w-75 v-mid tr pr3 pt3">
                </div>
              </nav>
            </header>
          </div>

          <div className="flex-auto white absolute center-margin">
            <h1 className="f1-l f2i-m f2 tc">The Coral Project</h1>
            <p className="f6-l f6-m f7 tc ttu tracked">Because journalism needs everyone</p>
          </div>

          <picture className="flex-auto w-100 bt-l tz-border-l bt-m tz-border-m bn">
            <img className="w-100" src="/images/splash-sm.jpg" alt="[IMAGE] A woman sits at a table, talking to an unseen companion. The image has an orange tint."/>
          </picture>
        </div>


        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc">
          </div>
          <div className="logo flex-auto tc">
          </div>
          <div className="logo flex-auto tc">
          </div>
          <div className="logo flex-auto tc">
          </div>
        </div>

        <div className="flex items-center justify-center dark-bg h3">
          <p className="f6-l f6-m f7 mh3 mh0-ns tc white ttu tracked">Open-source tools that make journalism better</p>
        </div>

        <div className="center tc flex flex-column items-center justify-center mt5-ns mt3 mh2 mh0-ns">
          <h2 className="flex-auto f3 f2-ns ttu tracked coral">Newsrooms using our software</h2>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>
        <br/>
        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>


        <div id="products" className="coral-bg bg-cn">
          <h2 className="f3 f2-ns white tc ttu tracked pt5-ns pt4">Tools</h2>
          <div className="center content-width flex flex-wrap pv3">

            <div className="flex-100 flex-50-m flex-33 white tc h5 product-cell mb5-ns mb4">
              <a href="/products/ask.html"></a>
              <div className="b f3 pv2-ns pv3">Ask</div>
              <div className="h3-ns b f6-ns f7 pb4-ns pb3">Invite and display relevant content</div>
              <div className="mt3-ns mt2">
                <a className="link b f6-ns f7 pa2 pa3-ns button-link" href="/products/ask.html">Learn More</a>
              </div>
            </div>

            <div className="flex-100 flex-50-m flex-33 white tc h5 product-cell mb5-ns mb4">
              <a href="/products/talk.html"></a>
              <div className="b f3 pv2-ns pv3">Talk</div>
              <div className="h3-ns b f6-ns f7 pb4-ns pb3">Have better conversations</div>
              <div className="mt3-ns mt2">
                <a className="link b f6-ns f7 pa2 pa3-ns button-link" href="/products/talk.html">Learn More</a>
              </div>
            </div>

            <div className="flex-100 flex-50-m flex-33 white tc h5 product-cell mb5-ns mb4">
              <a href="/products/guides.html"></a>
              <div className="b f3 pv2-ns pv3">Guides</div>
              <div className="h3-ns b f6-ns f7 pb4-ns pb3">Design your community strategy</div>
              <div className="mt3-ns mt2">
                <a className="link b f6-ns f7 pa2 pa3-ns button-link" href="/products/guides.html">Learn More</a>
              </div>
            </div>

          </div>
        </div>

        <div className="center tc flex flex-column items-center justify-center mt5-ns mt3 mh2 mh0-ns">
          <h2 className="flex-auto f3 f2-ns ttu tracked coral">Why use Coral?</h2>
          <p className="flex-auto w-33-l w-50-m w-80 center f4 f7 mb3">Our tools are built by and for journalists, to help you work better.
            <br/>
            <br/>Our software contains no external trackers or surveillance – the only person who should own your data is you. </p>
          <a className="flex-auto f5 f7 link coral-link b body-grey" href="about.html">Learn more about The Coral Project</a>
        </div>

        <div className="center content-width flex flex-wrap f6-ns f7 mv5-l mv5-m mv4">

          <div className="flex-100 flex-50-m flex-25-l tc ">
            <div className="ttu tracked f6 b mt4-ns mt3">For</div>
            <div className="fw1 f2 h3-ns ">Community Members</div>
            <div className="f6-ns f7 mt5-l mt3 mb3">

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Control your experience</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Interact with the newsroom</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Avoid harassment</div>

            </div>
            <a className="f6-ns f7 link coral-link body-grey b" href="/users/community-members.html">Read more <i className="icon-right-dir body-grey pa0" aria-hidden="true"></i></a>
          </div>

          <div className="flex-100 flex-50-m flex-25-l tc ">
            <div className="ttu tracked f6 b mt4-ns mt3">For</div>
            <div className="fw1 f2 h3-ns ">Engagement Editors</div>
            <div className="f6-ns f7 mt5-l mt3 mb3">

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Customize your tools</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Scale your workload</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Find great contributions</div>

            </div>
            <a className="f6-ns f7 link coral-link body-grey b" href="/users/engagement-editors.html">Read more <i className="icon-right-dir body-grey pa0" aria-hidden="true"></i></a>
          </div>

          <div className="flex-100 flex-50-m flex-25-l tc ">
            <div className="ttu tracked f6 b mt4-ns mt3">For</div>
            <div className="fw1 f2 h3-ns ">Journalists</div>
            <div className="f6-ns f7 mt5-l mt3 mb3">

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Have smarter interactions</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Find potential sources</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Create an audience</div>

            </div>
            <a className="f6-ns f7 link coral-link body-grey b" href="/users/journalists.html">Read more <i className="icon-right-dir body-grey pa0" aria-hidden="true"></i></a>
          </div>

          <div className="flex-100 flex-50-m flex-25-l tc ">
            <div className="ttu tracked f6 b mt4-ns mt3">For</div>
            <div className="fw1 f2 h3-ns ">Publishers</div>
            <div className="f6-ns f7 mt5-l mt3 mb3">

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Increase engagement</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Increase loyalty</div>

              <div className="pb2-ns pb3"><i className="icon-ok-circled check-grey" aria-hidden="true"></i>Improve content</div>

            </div>
            <a className="f6-ns f7 link coral-link body-grey b" href="/users/publishers.html">Read more <i className="icon-right-dir body-grey pa0" aria-hidden="true"></i></a>
          </div>

        </div>

        <div className="flex items-center justify-center dark-bg h3">
          <p className="f6-l f6-m f7 mh3 mh0-ns tc white ttu tracked">Bringing communities closer to journalism</p>
        </div>

        <div className="center tc flex flex-column items-center justify-center mt5-ns mt3 mh2 mh0-ns">
          <h2 className="coral ttu tracked f2-l f2i-m f3 ">How do I get your software?</h2>
          <p className="flex-auto w-33-l w-50-m w-80 center f4 f7 mb3">All of The Coral Project’s software is free and open source. You can install it on your own servers or pay for external hosting.</p>
          <a className="flex-auto f5 f7 link coral-link b body-grey" href="install.html">Read more</a>
          <h2 className="coral ttu tracked f2-l f2i-m f3 pt4" id="contribute">How can I get involved?</h2>
          <p className="flex-auto w-33-l w-50-m w-80 center f4 f7 mb3">We want your ideas, your requests, your experiences, your bug reports, your skills, your code.</p>
          <a className="flex-auto f5 f7 link coral-link b body-grey" href="contribute.html">Join our community of contributors</a>
          <br/>
          <p></p>
        </div>

        <div className="center tc flex flex-column items-center justify-center mt5-ns mt3 mh2 mh0-ns">
          <h2 className="flex-auto f3 f2-ns ttu tracked coral">Our supporters</h2>
        </div>

        <div className="center content-width flex justify-around items-center h3-l h3-m h2">
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc">
          </div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
          <div className="logo flex-auto tc"></div>
        </div>
        <br/>


        <footer className="relative">

          <div className="dark-bg pa4">
            <div className="tc">
              <h2 className="f2-l f2i-m f3 ttu tracked white">Receive Our Newsletter</h2>
              <form className="ma0-ns" action="https://tinyletter.com/coralproject" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/coralproject', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true">
                <input className="subscribe-border v-top h3-ns ba f6-ns f7 mb3 ph4-l w-33-l blr2-l ph3-m w-33-m blr2-m ph2   w-100  br2    h2" type="text" name="email" id="tlemail" placeholder="Your email address"/>
                <input type="hidden" value="1" name="embed"/>
                <input className="ttu tracked subscribe-green subscribe-border v-top b ba f5-ns f6 h3-ns pv0-ns brr2-l ph4-l brr2-m ph3-m br2 pv2 ph4" type="submit" value="Subscribe"/>
              </form>
            </div>
          </div>


          <div className="med-bg center tc pa4 body-grey f6-ns f7">
            <div className="flex flex-column flex-row-ns items-center justify-between mb3">
              <a className="flex-auto body-grey link mb2 mb0-ns " target="_blank" href="https://twitter.com/coralproject"> Twitter</a>
              <a className="flex-auto body-grey link mb2 mb0-ns " target="_blank" href="https://github.com/coralproject"> GitHub</a>
              <a className="flex-auto body-grey link mb2 mb0-ns " href="mailto:support@coralproject.zendesk.com">Email Us</a>
              <a className="flex-auto body-grey link mb2 mb0-ns " target="_blank" href="https://www.mozilla.org/en-US/about/legal.html">Legal</a>
              <a className="flex-auto body-grey link mb2 mb0-ns " target="_blank" href="https://creativecommons.org/licenses/by/4.0/">License</a>
              <a className="flex-auto body-grey link mb2 mb0-ns " href="/code-of-conduct.html">Code of Conduct</a>
            </div>
            <div className="">
              <a className="dib-ns" href="https://mozilla.org" target="_blank">
              </a>
              <p className="w-50-ns dib-ns tl-ns">Mozilla is a global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at <a className="b body-grey link" href="//mozilla.org" target="_blank">mozilla.org</a></p>
            </div>
          </div>
        </footer>
      </div>
) } }
