import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

const Header = props => {
  const breakpoints = useBreakpoint()
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      {/* <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div> */}
      <div className="content">
        <div className="inner">
          {breakpoints.md ? (
            <h1>
              <a
                className="use-title-nova"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('nova')
                }}
              >
                CancaoNova
              </a>{' '}
              ×{' '}
              <a
                className="use-title-ol"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('ol')
                }}
              >
                Ohta Laboratory
              </a>
            </h1>
          ) : (
            <h1>
              <a
                className="use-title-nova"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('nova')
                }}
              >
                CancaoNova
              </a>
              <br />×<br />
              <a
                className="use-title-ol"
                href="javascript:;"
                onClick={() => {
                  props.onOpenArticle('ol')
                }}
              >
                Ohta Laboratory
              </a>
            </h1>
          )}

          <h2 style={{ margin: 0 }}>Joint Concert</h2>
          <h1>～ Voyage en France～</h1>
          {breakpoints.md ? (
            <h2>2022.5.8(sut) 16:00- (open 15:30)</h2>
          ) : (
            <h3>2022.5.8(sut) 16:00- (open 15:30)</h3>
          )}

          {breakpoints.md ? (
            <h2>台東区生涯学習文化センター ミレニアムホール</h2>
          ) : (
            <h2>
              台東区生涯学習文化センター
              <br /> ミレニアムホール
            </h2>
          )}
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('concept')
              }}
            >
              CONCEPT
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('stage')
              }}
            >
              Stage
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('access')
              }}
            >
              Access
            </a>
          </li>
          <li>
            <a
              className="use-border"
              href="https://passmarket.yahoo.co.jp/event/show/detail/02q449iuf2621.html"
              target="_blank"
            >
              Ticket <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
