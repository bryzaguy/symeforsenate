import React from 'react';
import style from './main.css';

module.exports = React.createClass({
  render () {
    return (
        <div className={style.container}>
          <header className={style.header}>
            <img className={style.logo} src="assets/logo.jpg" />
            <div className={style.contactInfo}>
              <p>
                <a href="mailto:ssyme@symere.com">ssyme@symere.com</a><br />
                <a href="tel:1-208-573-9300">1-208-573-9301</a><br />
              </p>
            </div>
          </header>
          <section>
            <div className={style.headshot}>
              <img className={style.headshotImage} src="assets/headshot.jpg" />
            </div>
            <div className={style.description}>
              <h1>Vote for Scott Syme District II Position A.</h1>
              <ul>
                <li>Local Businessman</li>
                <li>5th Generation Idahoan</li>
                <li>Graduate of the College of Idaho</li>
                <li>Involved in the community</li>
                <li>NRA Life Member</li>
              </ul>
            </div>
          </section>
          <section className={style.videoGallery}>
            <ul className={style.videoList}>
              <li className={style.videoItem}>
                <iframe className={style.video}
                  src="https://www.youtube.com/embed/js3BYcHmBhE"
                  frameBorder="0" allowFullScreen>
                </iframe>
              </li>
              <li className={style.videoItem}>
                <iframe alt="Agriculture" className={style.video}
                  src="https://www.youtube.com/embed/BhDhDRvHaGs"
                  frameBorder="0" allowFullScreen>
                </iframe>
              </li>
              <li className={style.videoItem}>
                <iframe className={style.video}
                  src="https://www.youtube.com/embed/BagYRDEFvy0"
                  frameBorder="0" allowFullScreen>
                </iframe>
              </li>
              <li className={style.videoItem}>
                <iframe className={style.video}
                  src="https://www.youtube.com/embed/LFB6LQ1-WKU"
                  frameBorder="0" allowFullScreen>
                </iframe>
              </li>
            </ul>
          </section>
          <section>
            <form action="mailto:bryzaguy@gmail.com"
                  method="POST"
                  encType="multipart/form-data"
                  name="SymeForIdahoResponse">
              <div className={style.personalInfo}>
                <h4>What is important to you?</h4>
                <ul className={style.list}>
                  <li>
                    <label htmlFor="fullname">Name:</label>
                    <input name="fullname" />
                  </li>
                  <li>
                    <label htmlFor="address">Address:</label>
                    <input name="address" />
                  </li>
                  <li>
                    <label htmlFor="city">City, State:</label>
                    <input name="city" defaultValue="Caldwell"/>
                    <input name="state" defaultValue="ID" />
                  </li>
                  <li>
                    <label htmlFor="zipcode">Zip:</label>
                    <input name="zipcode" />
                  </li>
                  <li>
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" />
                  </li>
                  <li>
                    <label htmlFor="phone">Phone:</label>
                    <input name="phone" />
                  </li>
                  <li>
                    <label htmlFor="socialurl">Social Link:</label>
                    <input name="socialurl" />
                  </li>
                </ul>
              </div>

              <div className={style.involvement}>
                <h4>How would you like to be involved?</h4>
                <ul className={style.list}>
                  <li>
                    <input name="help" type="checkbox" />
                    <label htmlFor="help">{' Help with campaign'}</label>
                  </li>
                  <li>
                    <input name="forward" type="checkbox" />
                    <label htmlFor="forward">{' Forward Emails to Friend'}</label>
                  </li>
                  <li>
                    <input name="phonecalls" type="checkbox" />
                    <label htmlFor="phonecalls">{' Make phone calls'}</label>
                  </li>
                  <li>
                    <input name="yardsign" type="checkbox" />
                    <label htmlFor="yardsign">{' Post a yard sign'}</label>
                  </li>
                  <li>
                    <input name="literature" type="checkbox" />
                    <label htmlFor="literature">{' Help distribute literature'}</label>
                  </li>
                </ul>
              </div>
              <div className={style.comments}>
                <label htmlFor="comments"><strong>Comments:</strong></label><br />
                <textarea className={style.commentBox} name="comments" />
              </div>
              <div className={style.callToAction}>
                <h4>To complete:</h4>
                <button type="submit" className={style.donateButton}>Submit</button>
                <p>OR</p>
                <button className={style.donateButton}>Donate</button>
              </div>
            </form>
          </section>
          <footer className={style.footer}>
            <p>Paid for by Syme for Idaho - Patti Syme Treasurer</p>
          </footer>
        </div>
      );
  }
});
