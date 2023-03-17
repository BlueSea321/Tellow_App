import React from 'react'
import { Alert, Button, Container, Image } from 'react-bootstrap'
import { getUserData, resendEmail } from '../../api/auth';
import Footer from '../../component/Footer'
import { Header } from '../../component/Header'
import { useLangContext } from '../../context/langContext';
import { msgs } from '../../utils/utils';

export default function Verification() {
    const { langData } = useLangContext();
    const [alertMsg, setAlertMsg] = React.useState('')
    const [signupData, setSignupData] = React.useState({})

    const resend = async () => {
        const res = await resendEmail(signupData)
        if (res.msg === msgs.resend) {
            setAlertMsg(langData.page.auth.verification.sentMsg)
        } else if (res.msg === msgs.error) {
            setAlertMsg(langData.page.auth.verification.errMsg)
            console.log(res.err)
        }
    }

    React.useEffect(() => {
        const getUserInfo = async () => {
            const userid = localStorage.getItem('tellow_signup_id')
            const user = await getUserData(userid)
            if (user.status === 'ok') {
                setSignupData(user.data)
            } else {
                setAlertMsg(langData.page.auth.verification.wrongMsg)
            }
        }
        getUserInfo()
    }, [langData])

  return (
    <>
        <Header />
        <Container>
        
        <div className="home-part">
          <div className="register_contain p-4">
          {
            alertMsg &&
            <Alert variant='success'>
                {alertMsg}
            </Alert>
        }
            <div className='verify_box p-4'>
                <div className='w-100 d-flex justify-content-center'>
                    <Image 
                        src='https://www.f-cdn.com/assets/main/en/assets/illustrations/email/check-email.svg' 
                        style={{
                            width: '30%'
                        }}
                    />
                </div>
                <h5>{langData.page.auth.verification.content1} {signupData.username}</h5>
                <h5>{langData.page.auth.verification.content2}</h5>
                <br />
                <p>{signupData.email}</p>
                <br />
                <Button onClick={resend}>
                    {langData.page.auth.verification.resend}
                </Button>
            </div>
          </div>    
        </div>
        </Container>
        <Footer />
    </>
  )
}
