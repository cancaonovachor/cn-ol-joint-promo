import React from 'react'
import PropTypes from 'prop-types'
import pic02 from '../images/shirotokamojinashi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <a href="https://cancaonovachor.com/">
        <img src={pic02} alt="" />
      </a>
    </div> */}
    <div className="content">
      <div className="inner">
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
        <h1>Joint Concert</h1>
        <h2>2022.5.8(sut) 16:00- (open 15:30)</h2>
        <h2>台東区生涯学習文化センター ミレニアムホール</h2>
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
            href="https://t.livepocket.jp/e/7anr0"
            target="_blank"
          >
            Ticket <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
