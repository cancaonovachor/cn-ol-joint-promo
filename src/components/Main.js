import PropTypes from 'prop-types'
import React from 'react'
import zentai from '../images/zentai.jpg'
import hall from '../images/access-taitohall.jpeg'
import kiito_senzai from '../images/kiito_senzai_edit.jpg'
import access from '../images/access.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="nova"
          className={`${this.props.article === 'nova' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CancaoNova</h2>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <p>
            2016年7月創団、団名はポルトガル語で”新しい歌”。あっと驚くような合唱活動を志す合唱集団。
            出身母体・年齢・性別・居住地に拘らず、新しいサウンド・合唱活動を目指して活動中。
            活動拠点となる、いわゆる本拠地を設けず、関東支部（東京）・関西支部（兵庫）の2支部で活動を展開。
            <br />
            主な出演ステージは全日本合唱コンクール、全国声楽アンサンブルコンテスト、東京国際合唱コンクール。
          </p>
          <h3>＜主な受賞歴＞</h3>
          <p>
            ・第72回全日本合唱コンクール 同声合唱の部 《銀賞》 <br />
            ・第1,2回東京国際合唱コンクール　同声合唱部門　《金賞》
            <br />
            ・第72,73,74回関西合唱コンクール　同声合唱の部　《金賞》
            <br />
            ・第12回声楽アンサンブルコンテスト全国大会2019　《金賞》
            <br />
            ・第7回全日本合唱フェスティバルin伊豆の国　《バッカス賞》
            <br />
          </p>
          {close}
        </article>
        <article
          id="ol"
          className={`${this.props.article === 'ol' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Ohta Laboratory</h2>
          <div class="youtube">
            <span className="image-main main">
              <img src={kiito_senzai} alt="" />
            </span>
          </div>
          <p>OhtaLabsの紹介文をここに記載する</p>
          <p>画像もしくはyoutube動画の挿入が可能</p>
          <p>ある程度の見出し要素も記述可能</p>
          {close}
        </article>
        <article
          id="concept"
          className={`${this.props.article === 'concept' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CONCEPT</h2>
          <div class="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VFreqcoW4Qk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p>カンサォン・ノーヴァ×Ohta Laboratoryによるジョイントコンサート</p>
          <p>
            概要文をここに挿入する概要文をここに挿入する概要文をここに挿入する概要文をここに挿入する
          </p>
          <p>
            浜田さんからのメッセージ（youtubeあるならframe挿入）及び各代表のメッセージもここに入る予定
          </p>
          <p>
            ステージ情報は{' '}
            <a
              className="use-border"
              href="javascript:;"
              onClick={async () => {
                await this.props.onCloseArticle()
                this.props.onOpenArticle('stage')
              }}
            >
              こちら
            </a>{' '}
            から
          </p>
          {close}
        </article>

        <article
          id="stage"
          className={`${this.props.article === 'stage' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Stage</h2>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>1st Stage: Repertoire Exchange</h3>
          <p>
            ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文
          </p>
          <p>
            演奏予定曲：
            <br></br>・Laudate Dominum (GYONGYOSI, Levente)
            <br></br>・Pseudo Yoik (Mäntyjärvi, Jaakko)
            <br></br>・Ave Maria (BIEBL, Franz)
            <br></br>etc...
          </p>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>2nd Stage: OL単独</h3>
          <p>
            ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文
          </p>
          <p>
            演奏予定曲：
            <br></br>・Laudate Dominum (GYONGYOSI, Levente)
            <br></br>・Pseudo Yoik (Mäntyjärvi, Jaakko)
            <br></br>・Ave Maria (BIEBL, Franz)
            <br></br>etc...
          </p>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>3rd Stage: CN単独</h3>
          <p>
            ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文
          </p>
          <p>
            演奏予定曲：
            <br></br>・Laudate Dominum (GYONGYOSI, Levente)
            <br></br>・Pseudo Yoik (Mäntyjärvi, Jaakko)
            <br></br>・Ave Maria (BIEBL, Franz)
            <br></br>etc...
          </p>
          <span className="image-main main">
            <img src={kiito_senzai} alt="" />
          </span>
          <h3>4th Stage: 合同</h3>
          <p>
            ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文ステージ紹介文
          </p>
          <p>
            演奏予定曲：
            <br></br>・Laudate Dominum (GYONGYOSI, Levente)
            <br></br>・Pseudo Yoik (Mäntyjärvi, Jaakko)
            <br></br>・Ave Maria (BIEBL, Franz)
            <br></br>etc...
          </p>
          {close}
        </article>

        <article
          id="access"
          className={`${this.props.article === 'access' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Access</h2>
          <span className="image-main main">
            <img src={hall} alt="" />
          </span>
          <h3>
            台東区生涯学習文化センター <br />
            ミレニアムホール
          </h3>
          <p>
            〒111-8621
            <br />
            東京都台東区西浅草3丁目25番16号
            <br />
            TEL：03-5246-5827
            <br />
          </p>
          <p>
            JR山手線・京浜東北線「鶯谷駅」南口 徒歩15分 <br />
            地下鉄日比谷線「入谷駅」1番出口 徒歩8分
            <br />
            つくばエクスプレス線「浅草駅」A2出口 徒歩8分
            <br />
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
