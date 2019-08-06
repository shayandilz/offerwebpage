import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Form from './form'
import cafebazar from './images/Icon download/cafebazar.png'
import maiket from './images/Icon download/myket.png'
import google from './images/Icon download/google_play1.png'
import dlLink from './images/Icon download/apk1.png'
import offer1 from './images/icons/1.png'
import offer2 from './images/icons/2.png'
import offer3 from './images/icons/3.png'
class Header extends Component {
    render() {
        return (
            <div className='banner'>
                <div className='banner1'></div>
                <div className='banner2'>
                        <Container fluid={true}>
                            <Row>
                                <Col className="col-xl-12 col-lg-11 col-form align-self-center"><h4>برای دریافت اپ شماره خود را وارد کنید</h4></Col>
                            </Row>
                            <Row>
                                <Col xl={8} lg={8} md={9} sm={9} xs={10}><Form className="align-self-center"/></Col>
                            </Row>
                            <Row className="justify-content-around first-row">
                                <Col xl={4} lg={5} md={6} sm={12} xs={12}><a target="_blank" rel="noopener noreferrer" href="https://www.myket.ir/app/ir.raha.offer"><img src={maiket} alt="myket" className="" id="imgDownload"></img></a></Col>
                            
                                <Col xl={4} lg={5} md={6} sm={12} xs={12}><a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=ir.raha.offer"><img src={google} alt="google" className="" id="imgDownload"></img></a></Col>
                            </Row>
                            <Row className="justify-content-around">
                                <Col xl={4} lg={5} md={6} sm={12} xs={12}><a target="_blank" rel="noopener noreferrer" href="https://cafebazaar.ir/app/ir.raha.offer/?l=fa"><img src={cafebazar} alt="cafebazar" className="" id="imgDownload"></img></a></Col>
                                <Col xl={4} lg={5} md={6} sm={12} xs={12}><a target="_blank" rel="noopener noreferrer" href="_#"><img src={dlLink} alt="DlLink" className="" id="imgDownload"></img></a></Col>
                              
                            </Row>
                        </Container>
                </div>
                <div className="information">
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col className='col-lg-4 col-md-4 col-sm-12 col-12 mt-3'>
                            <img src={offer1} alt="offerlogo1" className='offerlogo mt-3'></img>
                            <h4 className='mt-3'>آفر چیه؟</h4>
                            <p>آفر یه دستیار هوشمند خریده که به شما کمک می‌کنه از بین کالاهای چند صدتا فروشگاه، کالای مورد نظرتون رو با ارزون‌ترین قیمت بخرید و تخفیف‌های خوب رو پیدا کنید.  آفر فروشگاه نیست اما به کمکش می‌تونید بهترین فروشنده‌ی هر کالا رو پیدا کنید.</p>
                        </Col>
                        <Col className='col-lg-4 col-md-4 col-sm-12 col-12 mt-3'>
                            <img src={offer2} alt="offerlogo2" className='offerlogo mt-3'></img>
                            <h4 className='mt-3'>چرا آفر؟</h4>
                            <p>تا حالا شده به این فکر کنید که یه کالایی رو خریدید ولی ممکنه ارزون‌ترش هم بوده باشه؟ شده به این فکر کنید که یکی بهتون تخفیف داده ولی تخفیفش واقعی نبوده و قبلش قیمت رو برده بوده بالا؟ آفر به شما کمک می‌کنه قیمت‌ها و تخفیفها براتون شفاف بشه.</p>
                        </Col>
                        <Col className='col-lg-4 col-md-4 col-sm-12 col-12 mt-3'>
                            <img src={offer3} alt="offerlogo3" className='offerlogo mt-3'></img>
                            <h4 className='mt-3'>چطور کار می‌کنه؟</h4>
                            <p>آفر فروشگاه نیست ولی با استفاده از تکنولوژی خاصش اطلاعات حدود یک میلیون کالا رو جمع‌آوری و بازار رو برای شما شفاف می‌کنه. هم به نفع شماست، هم فروشنده‌های منصف و هم خود آفر. هوش مصنوعی و تکنولوژی به کمک شما میاد تا خریدی هوشمندانه داشته باشید.</p>
                        </Col>
                    </Row>
                </Container>

            </div>
            </div>
        );
    }
}

export default Header;