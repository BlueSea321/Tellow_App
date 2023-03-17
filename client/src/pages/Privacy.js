import React from "react";
import { Container } from "react-bootstrap";
import { SupportHeader } from "../component/SupportHeader";
import { useLangContext } from "../context/langContext";
import "../styles/support.css";

export default function Privacy() {
  const { langData } = useLangContext();

  return (
    <>
      <SupportHeader />
      <Container fluid>
        <div className="home-part">
          <div className="home-contain">
            <div className="mt-4 privacy_box">
              <h2>Privacy Policy</h2>
              <div style={{ textAlign: "right" }}>
                <i>Last updated: 20.10.2022</i>
              </div>
              <p>
                <a href="#en">Privacy Policy English</a>
                <br />
                <a href="#it">Informativa sulla privacy Italia</a>
              </p>
              <h1 id="en">
                <span style={{ 'fontSize': '1.5rem'}}>Privacy Policy English</span>
              </h1>
              <p>
                <strong>General</strong>
              </p>
              <p>
                At tellows, we are keenly aware of the trust you place in us and
                our responsibility to protect your privacy. To better protect
                your privacy we provide this notice explaining of our online
                information practices, including how we collect and use the
                information you may provide to us on the website, and the
                choices you can make about the way your information is collected
                and used. We comply with the data protection regulations of the
                European Union regarding your personal data.
              </p>
              <p>
                This disclaimer refers only to our sites. Third parties might
                offer hyperlinks to other websites which may have information
                policies and practices different from ours. We do not control
                and are not responsible for the privacy policies, practices, or
                the content of any third party websites. Once you’ve left our
                websites via such a link or by clicking on an advertisement, you
                should check the applicable privacy policy of the third party or
                advertiser site to determine how they will handle any
                information they collect from you.
              </p>
              <p>
                Personal data are single details about personal or factual
                circumstances of a certain or a definable natural person.
                Information that can identify a person or make him identifiable.
              </p>
              <p>
                Hereafter, we will explain what information is collected and for
                what purpose.
              </p>
              <p>
                <strong>Data Collection and Processing</strong>
              </p>
              <p>
                We hereby confirm that the collection, processing and use of
                personal data is done in compliance with all data protection
                regulations and is in adherence with the laws mentioned above,
                specifically the GDPR Art. 6 s. 1 a and the CCPA alongside the
                other data protection laws of California. This means we only
                process data in case of legitimate interest according to Art. 6
                s. 1 f GDPR (e.g. for analysis, optimization and protection of
                the tellows online offerings) or under permission of processing
                by the user (e.g. accepting requests).
              </p>
              <p>
                We have technical (e.g. SSL encryption), contractual (e.g. data
                processing agreement) and organizational measures (e.g. access
                restrictions) in place to ensure that the rules of the GDPR are
                abided by and that data is secure from access and manipulation.
              </p>
              <p>
                It is possible to access our website without offering any
                personal information. We have also taken measures to anonymize
                (see paragraph Google Analytics), i.e. an analysis data
                acquisition only serves to improve our offerings and does not
                allow for any inferences about individuals.
              </p>
              <p>
                We process the following categories of data which are relevant
                for using the tellows website and services or are necessary for
                contacting:
              </p>
              <ul>
                <li>master data (e.g. name)</li>
                <li>contact data (e.g. phone number, email)</li>
                <li>
                  content entry data (e.g. text/ comment entry, access times)
                </li>
                <li>meta data (e.g. IP address)</li>
              </ul>
              <p>
                <strong>Cooperation with Third Parties</strong>
              </p>
              <p>
                The transmission of data to third parties only happens in
                accordance with the legal requirements. We only pass on data to
                third parties under permission in accordance with Art. 6 s. 1 a
                GDPR or on the basis of justified interest according to Art. 6
                s. 1 f GDPR in effective and economical operations in our
                business.
              </p>
              <p>
                Approval of information processing by third parties is given on
                the basis of a signed contract DAV/DPA (data processing
                contract) as per Art. 28 GDPR.
              </p>
              <p>
                <strong>Transmission to Third Countries</strong>
              </p>
              <p>
                The transmission or processing of data to third countries (i.e.
                outside the EEA (European Economic Area)), with express consent,
                only occurs if it fulfills a legal obligation or is of justified
                interest to us. E.g. in using the services of third parties. In
                this case, the data processing is based on the fact that the EU
                Commission has determined that a level of data protection
                similar to that in the EU exists, you have given us your
                declaration of consent or we have agreed to the standard
                contractual clauses for the protection of your data with the
                provider.
              </p>
              <p>
                <strong>Personal Data</strong>
              </p>
              <p>
                We collect and save information in log files in accordance with
                Art. <a href="https://dejure.org/gesetze/DSGVO/6.html">6</a> s.
                1 f GDPR (e.g. to resolve cases of misuse or scamming), that
                your browser automatically transfers to us after requests. The
                following data is collected:
              </p>
              <ul>
                <li>Referrer URL (the page from which tellows was accessed)</li>
                <li>Browser type/ -version</li>
                <li>Used operating system</li>
                <li>Web pages viewed during the visit at tellows</li>
                <li>IP address (host name of the accessing computer)</li>
                <li>Date and time of server request</li>
                <li>Transferred data volume</li>
                <li>Requesting provider</li>
              </ul>
              <p>
                All of this data is subject to a special protection in
                accordance with the regulations under data protection law, which
                we at tellows and its corresponding applications guarantee
                through technical and obligatory measures. This data cannot be
                assigned to any particular person. Merging of this data with
                other data sources will not be done.
              </p>
              <p>
                For security reasons, log file information is stored for a
                maximum duration of 7 days and then deleted. We reserve the
                right to store IP addresses for a longer period for law
                enforcement purposes in the event of a violation of our terms of
                use.
              </p>
              <p>
                <strong>Use of Cookies</strong>
              </p>
              <p>
                We use so-called cookies to allocate your requests from the
                internet. These small files are automatically stored on your
                hard drive by your browser for the duration of your stay on our
                website and are necessary for the accurate use of our website.
                You can delete the cookies after finishing your stay at our
                website with certain configurations in your browser. They serve
                to make our website more user-friendly, effective and secure.
                For reference for users in California, tellows does not support
                Do Not Track requests.
                <br />
                <a href="http://www.aboutcookies.org/default.aspx">
                  You can find further information on the subject of cookies
                  here
                </a>
              </p>
              <p>
                Our online offerings are also usable under exclusion of cookies.
                If you do not want cookies to be stored on your computer, you
                can deactivate the corresponding option in the system settings
                of your browser. Saved cookies can be deleted in the system
                settings of the browser. The exclusion of cookies can lead to
                functional restrictions of this online offer.
              </p>
              <p>
                The option to have many online advertising cookies from
                companies is given via the US website
                http://www.aboutads.info/choices or the European website{" "}
                <a href="http://www.youronlinechoices.com/uk/your-ad-%20choices/">
                  http://www.youronlinechoices.com/uk/your-ad- choices/
                </a>
              </p>
              <p>
                <strong>Use of Google Analytics</strong>
              </p>
              <p>
                tellows uses Google Analytics, which is a web analysis service
                provided by Google Inc., (“Google”), 1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA.
              </p>
              <p>
                Web analysis is the collection, storage and analysis of data
                about the behavior of visitors to websites. A web analysis
                service collects data including from which website an affected
                person has come to a website (so-called referrers), which
                subpages of the website were accessed or how often and for which
                length of stay a subpage was viewed. A web analysis is mainly
                used to optimize a website and for the cost-benefit analysis of
                online advertising.
              </p>
              <p>
                We only use Google Analytics with active IP anonymization. This
                means that the IP address of the users Google within member
                states of the European Union or in other contracting states of
                the Agreement from the European Economic Area will be shortened.
                Only in exceptional cases will the full IP address be sent to a
                Google server in the US and shortened there.
              </p>
              <p>
                Google Analytics uses so-called “cookies”, which are text files
                that are stored on your computer and make it possible for us to
                analyse your use of this website. The information about your use
                of this website that is generated by means of a cookie is, in
                most cases, transferred to a Google server in the USA and stored
                there. However, if IP anonymization is activated on this website
                and you are located in a member state of the European Union or
                in another contracting state to the Agreement on the European
                Economic Area, your IP address will first be shortened by
                Google.
              </p>
              <p>
                Only in exceptional cases will your complete IP address be
                transferred to a Google server in the USA and shortened there.
                Google will use this information on behalf of the operator of
                this website in order to analyze your use of this website,
                compile reports on website activities, and render further
                services related to website and internet usage for the operator
                of this website.
                <br />
                In the event that personal data is transferred to the USA,
                corresponding EU standard contracts (adequate guarantee for data
                processing in non-European countries) have been concluded with
                Google LLC. The EU standard contractual clauses used can be
                accessed via the URL{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32010D0087"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32010D0087
                </a>
                .
              </p>
              <p>
                The IP address provided by your browser in the context of Google
                Analytics will not be merged by Google with other data. You can
                prevent storage of cookies by means of a setting in your browser
                software; however, we must advise you that in this case you
                might not be able to use all the functions of this website to
                their full extent.
              </p>
              <p>
                Beyond this, you can also prevent collection of the data that is
                generated by cookies and related to your use of this website
                (including your IP address) by Google as well as processing of
                this data by Google by downloading and installing the browser
                plugin available under the following link.{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  http://tools.google.com/dlpage/gaoptout
                </a>
                . We like to point out, however, that in this case you might not
                be able to use all the website’s functions to their full extent.
                By using our website, you agree to the processing of the
                compiled data by Google in the aforementioned manner and for the
                aforementioned purpose.
              </p>
              <p>
                For more information about Google’s use of data, opt-out and
                other options, please visit Google’s websites:
              </p>
              <p>
                <a href="https://www.google.com/intl/de/policies/privacy/partners">
                  https://www.google.com/intl/de/policies/privacy/partners
                </a>
                <br />
                <a href="https://www.google.com/policies/technologies/ads">
                  http://www.google.com/policies/technologies/ads
                </a>
                <br />
                <a href="https://www.google.de/settings/ads">
                  http://www.google.de/settings/ads
                </a>
                <br />
                <a href="https://www.google.com/ads/preferences">
                  http://www.google.com/ads/preferences
                </a>
              </p>
              <p>
                <strong>California</strong>
              </p>
              <p>
                <em>COPPA</em>
                <br />
                tellows does not market to children and complies with COPPA as
                such.{" "}
              </p>
              <p>
                <em>Do Not Sell My Personal Data </em>
                <br />
                tellows does not sell data to third parties. Third party data
                analytics are, carried out via Google Analytics, as mentioned
                above using anonymised iP addresses and data encryption.{" "}
              </p>
              <p>
                <strong>Advertising Partners</strong>
              </p>
              <p>
                Some of our affiliates may use cookies and web beacons. Our
                advertising partners include Google Adsense, The Reach Group,
                Adscale / Ströer, Valuebrand, Snigel Web Services, 1337 UGC GmbH
                and YieldLove.
              </p>
              <p>
                These third-party ad servers or ad networks use technology for
                advertisements and links that appear on tellows and are sent
                directly to your browser. This automatically gives you your IP
                address. Other technologies (such as cookies, JavaScript, or web
                beacons) can also be used by third-party ad networks to measure
                the effectiveness of their advertising or to personalize the ad
                content displayed.
              </p>
              <p>
                The collection and processing of data is based on the legitimate
                interest in accordance with Article 6 s. 1 f of the GDPR and by
                commissioning the processing of data by advertising partners
                (third parties) with a concluded DAV / DPA („data processing
                contract“) pursuant to Art. 28 GDPR. tellows has no access or
                control over these third-party cookies.
              </p>
              <p>
                Refer to the Affiliate’s Privacy Policy for details on their
                practices and how to opt out of specific practices. The tellows
                privacy policy does not apply to other advertisers or sites, and
                we cannot control their activities.
              </p>
              <p>
                If you want to disable cookies, you can do so through your own
                browser options. You can find more detailed information about
                cookie management with certain web browsers on the respective
                websites of the browsers.
              </p>
              <p>
                <strong>
                  Third Party and Opt-Out Opportunities for YieldLove, Snigeld
                  Web Ltd. and 1337 UGC GmbH
                </strong>
              </p>
              <p>
                We use SnigelWeb Ltd. as a third-party to provide monetisation
                technologies for our site. You can review their privacy and
                cookie policy{" "}
                <a
                  href="https://www.snigel.com/privacy-policy/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                A central contradiction possibility for different third-party
                suppliers in particular US-companies is also attainable under
                the following link: optout.networkadvertising.org But you can
                also opt-out separately for each company we work with.
                Responsible for the data collection and for the delivery of
                interest based-based online advertising are the following
                companies on behalf Yieldlove GmbH, Kehrwieder 9, 20457 Hamburg
                and / or SnigelWeb Ltd., The Black Church, St. Mary’s Place, D07
                P4AX and / or 1337 UGC GmbH, Am Sägerhof 3, 90596 Schwanstetten:
              </p>
              <p>
                <u>4w Marketplace</u>
                <br />
                4w Marketplace (www.4wmarketplace.com) uses technologies, to
                show interest-based advertising to you. Provider of 4w
                Marketplace is 4w Marketplace srl located in Fisciano (Salerno)
                – 84084 in Via Giovanni Paolo II n.100. In case you would like
                to prevent 4w Marketplace from gathering anonymised data you can
                do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.4wmarketplace.com/privacy/">
                  http://www.4wmarketplace.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://www.youronlinechoices.com/it/le-tue-scelte">
                  http://www.youronlinechoices.com/it/le-tue-scelte
                </a>
              </p>
              <p>
                <u>Adform</u>
                <br />
                Adform (www.adform.com) uses technologies, to show
                interest-based advertising to you. Provider of Adform is Adform
                located in Wildersgade 10B, 1, 1408 Copenhagen, Denmark. In case
                you would like to prevent Adform from gathering anonymised data
                you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://site.adform.com/privacy-policy-opt-out/">
                  https://site.adform.com/privacy-policy-opt-out/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://site.adform.com/privacy-policy-opt-out/">
                  https://site.adform.com/privacy-policy-opt-out/
                </a>
              </p>
              <p>
                <u>Amazon</u>
                <br />
                Amazon (https://www.aps.amazon.com) uses technologies, to show
                interest-based advertising to you. Provider of Amazon publisher
                services is Amazon publisher services located in Washington –
                410 Terry Ave. North, Seattle, WA 98109-5210. In case you would
                like to prevent Amazon publisher services from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_sib?ie=UTF8&amp;nodeId=468496">
                  https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_sib?ie=UTF8&amp;nodeId=468496
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.amazon.com/adprefs/ref=hp_468496_advertisingpref2">
                  https://www.amazon.com/adprefs/ref=hp_468496_advertisingpref2
                </a>
              </p>
              <p>
                <u>AppNexus</u>
                <br />
                AppNexus (https://www.appnexus.com) uses technologies, to show
                interest-based advertising to you. Provider of AppNexus is
                AppNexus Group located in in New York – 28 W. 23rd Street, New
                York, New York, 10010. In case you would like to prevent
                Appnexus from gathering anonymised data you can do so by using
                the opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a
                  href="https://www.appnexus.com/en/company/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.appnexus.com/en/company/privacy-policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a
                  href="https://www.appnexus.com/en/company/platform-privacy-policy#choices"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.appnexus.com/en/company/platform-privacy-policy#choices
                </a>
              </p>
              <p>
                <u>Conversant</u>
                <br />
                Conversant (https://www.conversantmedia.com) uses technologies,
                to show interest-based advertising to you. Provider of
                Conversant is Conversant inc. located in in Chicago (IL) – 101
                North Wacker, 23rd Floor Chicago, IL 60606. In case you would
                like to prevent Conversant from gathering anonymised data you
                can do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.conversantmedia.com/legal/privacy">
                  http://www.conversantmedia.com/legal/privacy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.conversantmedia.com/">
                  http://optout.conversantmedia.com/
                </a>
              </p>
              <p>
                <u>Criteo</u>
                <br />
                Criteo (https://www.criteo.com) uses technologies, to show
                interest-based advertising to you. Provider of Criteo is Criteo
                located in Paris – 32 Rue Blanche – 75009 Paris – France. In
                case you would like to prevent Criteo from gathering anonymised
                data you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.criteo.com/privacy/">
                  http://www.criteo.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.criteo.com/privacy/">
                  https://www.criteo.com/privacy/
                </a>
              </p>
              <p>
                <u>District M</u>
                <br />
                District M (https://districtm.net) uses technologies, to show
                interest-based advertising to you. Provider of District M is
                District M located in Montreal – 5455 Gaspe Ave #730, Montreal,
                QC H2T 3B3, Canada. In case you would like to prevent District M
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://districtm.net/en/page/platforms-data-and-privacy-policy/">
                  https://districtm.net/en/page/platforms-data-and-privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://cdn.districtm.ca/optout.html">
                  https://cdn.districtm.ca/optout.html
                </a>
              </p>
              <p>
                <u>Doubleclick</u>
                <br />
                Doubleclick (www.doubleclickbygoogle.com) uses technologies, to
                show interest-based advertising to you. Provider of Doubleclick
                is Google located in Ireland Limited, Gordon House, Barrow St
                Dublin 4 Ireland. In case you would like to prevent Doubleclick
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.google.com/intl/en/policies/privacy/">
                  http://www.google.com/intl/en/policies/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://adssettings.google.com/authenticated?hl=en">
                  https://adssettings.google.com/authenticated?hl=en
                </a>
              </p>
              <p>
                <u>Facebook</u>
                <br />
                Facebook (www.facebook.com) uses technologies, to show
                interest-based advertising to you. Provider of Facebook is
                Facebook Inc., located in 1601 S. California Ave, Palo Alto, CA
                94304, USA. In case you would like to prevent Facebook from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.facebook.com/full_data_use_policy">
                  www.facebook.com/full_data_use_policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.facebook.com/ads/preferences">
                  www.facebook.com/ads/preferences
                </a>
              </p>
              <p>
                <u>Indexexchange</u>
                <br />
                Indexexchange (www.indexexchange.com) uses technologies, to show
                interest-based advertising to you. Provider of Indexexchange is
                Indexexchange located in New York – 20 W 22nd St. Suite 1101,
                New York, NY 10010. In case you would like to prevent
                Indexexchange from gathering anonymised data you can do so by
                using the opt-out link below. This Opt-out cookie deletes all
                gathered information until now and prevents it from collecting
                any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.indexexchange.com/privacy/">
                  http://www.indexexchange.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.networkadvertising.org/?c=1#!/">
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </p>
              <p>
                <u>Media.net</u>
                <br />
                Media.net (http://www.media.net/privacy-policy) uses
                technologies, to show interest-based advertising to you.
                Provider of Media.net is Media.net Advertising Ltd. located in
                Dubai – 107/108, DIC Building 5, Dubai Internet City, Dubai,
                215028, United Arab Emirates. In case you would like to prevent
                Media.net from gathering anonymised data you can do so by using
                the opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.media.net/privacy-policy">
                  http://www.media.net/privacy-policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.networkadvertising.org/choices/">
                  http://www.networkadvertising.org/choices/
                </a>
              </p>
              <p>
                <u>Oath</u>
                <br />
                Oath (https://www.oath.com/) uses technologies, to show
                interest-based advertising to you. Provider of Oath is Oath
                (EMEA) Limited located in Dublin – 5-7 Point Square, North Wall
                Quay. In case you would like to prevent Oath from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://privacy.aol.com/">http://privacy.aol.com/</a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://aim.yahoo.com/aim/ie/en/optout/">
                  https://aim.yahoo.com/aim/ie/en/optout/
                </a>
              </p>
              <p>
                <u>OpenX</u>
                <br />
                OpenX (https://www.OpenX.com) uses technologies, to show
                interest-based advertising to you. Provider of OpenX is OpenX
                located in Pasadena – 888 E Walnut St, 2nd Floor, Pasadena CA,
                91101, USA. In case you would like to prevent OpenX from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.openx.com/de_de/privacy-policy/">
                  https://www.openx.com/de_de/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.openx.com/legal/interest-based-advertising/">
                  https://www.openx.com/legal/interest-based-advertising/
                </a>
              </p>
              <p>
                <u>Pubmatic</u>
                <br />
                Pubmatic (https://www.pubmatic.com) uses technologies, to show
                interest-based advertising to you. Provider of Pubmatic is
                Pubmatic, Inc. located in Redwood City – 305 Main Street, First
                Floor, Redwood City, California 94063, USA. In case you would
                like to prevent Pubmatic from gathering anonymised data you can
                do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.openx.com/de_de/privacy-policy/">
                  https://www.openx.com/de_de/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://pubmatic.com/legal/opt-out/">
                  https://pubmatic.com/legal/opt-out/
                </a>
              </p>
              <p>
                <u>Pulsepoint</u>
                <br />
                Pulsepoint (https://www.pulsepoint.com) uses technologies, to
                show interest-based advertising to you. Provider of Pulsepoint
                is Pulsepoint, Inc. located in New York – 360 Madison Avenue,
                14th Floor, New York, NY 10017. In case you would like to
                prevent Pulsepoint from gathering anonymised data you can do so
                by using the opt-out link below. This Opt-out cookie deletes all
                gathered information until now and prevents it from collecting
                any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.pulsepoint.com/privacy-policy">
                  https://www.pulsepoint.com/privacy-policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.networkadvertising.org/?c=1#!/">
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </p>
              <p>
                <u>Reachnet</u>
                <br />
                Reachnet (https://www.reachnet.de) uses technologies, to show
                interest-based advertising to you. Provider of Reachnet is
                Reachnet DE Ltd. located in Hamburg – Grindelallee 41, D-20146
                Hamburg. In case you would like to prevent Reachnet from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.reachnet.de/unternehmen/agb.html">
                  http://www.reachnet.de/unternehmen/agb.html
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://adfarm1.adition.com/opt?m=optout&amp;n=73">
                  https://adfarm1.adition.com/opt?m=optout&amp;n=73
                </a>
              </p>
              <p>
                <u>Rubicon Project</u>
                <br />
                Rubicon Project (https://www.rubiconproject.com) uses
                technologies, to show interest-based advertising to you.
                Provider of Rubicon Project is Rubicon Project, inc. located in
                Playa Vista – 12181 Bluff Creek Drive, 4th Floor, Playa Vista,
                CA 90094, USA. In case you would like to prevent Rubicon Project
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.rubiconproject.com/privacy-policy/">
                  http://www.rubiconproject.com/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://rubiconproject.com/privacy/consumer-online-profile-and-opt-out/">
                  https://rubiconproject.com/privacy/consumer-online-profile-and-opt-out/
                </a>
              </p>
              <p>
                <u>Primis</u>
                <br />
                Primis (https://www.primis.tech) uses technologies, to show
                interest-based advertising to you. Provider of Primis is Primis
                LTD located in 622 Third avenue, McCann New York House 10017 New
                York City, USA. In case you would like to prevent Primis from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf">
                  https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://web.archive.org/web/20180116234711/http:/live.sekindo.com/utils/cookieOptOut.php">
                  https://web.archive.org/web/20180116234711/http:/live.sekindo.com/utils/cookieOptOut.php
                </a>
              </p>
              <p>
                <u>Smaato</u>
                <br />
                Smaato (https://www.smaato.com) uses technologies, to show
                interest-based advertising to you. Provider of Smaato is Smaato
                Ad Services located in Hamburg – Valentinskamp 70, Emporio,
                20355 Hamburg, Germany. In case you would like to prevent Smaato
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.smaato.com/privacy/">
                  https://www.smaato.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.youronlinechoices.eu/">
                  http://www.youronlinechoices.eu
                </a>
              </p>
              <p>
                <u>SmartAdserver</u>
                <br />
                SmartAdserver (https://www.smartadserver.com) uses technologies,
                to show interest-based advertising to you. Provider of
                SmartAdserver is SmartAdserver located in Paris – 66 Rue de la
                Chaussée d´Antin, 75009 Paris, France. In case you would like to
                prevent SmartAdserver from gathering anonymised data you can do
                so by using the opt-out link below. This Opt-out cookie deletes
                all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://smartadserver.com/company/privacy-policy/">
                  http://smartadserver.com/company/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.smartadserver.com/diffx/optout/IABOptout.aspx">
                  http://www.smartadserver.com/diffx/optout/IABOptout.aspx
                </a>
              </p>
              <p>
                <u>Sovrn</u>
                <br />
                Sovrn (https://www.sovrn.com) uses technologies, to show
                interest-based advertising to you. Provider of Sovrn is Sovrn
                Holdings, Inc. located in Boulder – 5541 Central Avenue,
                Boulder, CO 80301. In case you would like to prevent Sovrn from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.sovrn.com/privacy-policy-eu/">
                  https://www.sovrn.com/privacy-policy-eu/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://info.evidon.com/pub_info/15620?v=1&amp;nt=0&amp;nw=false">
                  https://info.evidon.com/pub_info/15620?v=1&amp;nt=0&amp;nw=false
                </a>
              </p>
              <p>
                <u>Ströer SSP</u>
                <br />
                Ströer SSP (https://www.adscale.de) uses technologies, to show
                interest-based advertising to you. Provider of Ströer SSP is
                Ströer media Deutschland GmbH located in Köln – 50999 Köln,
                Ströer-Allee 1. In case you would like to prevent Adscale from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.adscale.de/datenschutz">
                  http://www.adscale.de/datenschutz
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://ih.adscale.de/adscale-ih/oo">
                  ih.adscale.de/adscale-ih/oo
                </a>
              </p>
              <p>
                <u>Twiago</u>
                <br />
                Twiago (https://www.twiago.com) uses technologies, to show
                interest-based advertising to you. Provider of Twiago is Twiago
                located in Köln – Gustav-Heinemann-Ufer 72b, 50968 Köln. In case
                you would like to prevent Twiago from gathering anonymised data
                you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.twiago.com/datenschutz/">
                  http://www.twiago.com/datenschutz/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://control.twiago.com/privacy.php?lang=0">
                  http://control.twiago.com/privacy.php?lang=0
                </a>
              </p>
              <p>
                <u>Mopub</u>
                <br />
                Mopub (https://www.mopub.com) uses technologies, to show
                interest-based advertising to you. Provider of Mopub is Twitter,
                Inc. located in San Francisco – 1355 Market Street, Suite 900,
                San Francisco, Ca 94103. In case you would like to prevent
                Moppub from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.mopub.com/legal/privacy/">
                  https://www.mopub.com/legal/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.mopub.com/legal/privacy/">
                  https://www.mopub.com/legal/privacy/
                </a>
              </p>
              <p>
                <u>Inmobi</u>
                <br />
                Inmobi (https://www.inmobi.com) uses technologies, to show
                interest-based advertising to you. Provider of Inmobi is Inmobi
                Pte Ltd located in Bangalore – Embassy Tech Square,
                Kadubeesanahalli Village Outer Ring Road, Varthur Hobli,
                Bangalore 560103. In case you would like to prevent Inmobi from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.inmobi.com/privacy-policy/">
                  https://www.inmobi.com/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.inmobi.com/page/opt-out/">
                  https://www.inmobi.com/page/opt-out/
                </a>
              </p>
              <p>
                <u>Connectad</u>
                <br />
                Connectad (www.connectad.io) uses technologies, to show
                interest-based advertising to you. Provider of Connectad is
                Connectad located in Margaretenstrasse 87/11, Vienna, Austria.
                In case you would like to prevent Connectad from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://connectadrealtime.com/privacy/">
                  http://connectadrealtime.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://sync-eu.connectad.io/sync/dnt?__hstc=266841809.0a81b953556ce3558cb1f0af90aa4740.1527162622466.1527162622466.1527162622466.1&amp;__hssc=266841809.2.1527162622467&amp;__hsfp=1834479749">
                  http://sync-eu.connectad.io
                </a>
              </p>
              <p>OTHER / UNFORESEEN COOKIES</p>
              <p>
                Due to the way in which Internet and websites work, it is
                possible that we do not always have oversight into the cookies
                that are placed through our banners by third parties. This is
                particularly the case when our banners contain embedded elements
                such as texts, documents, images or film clips that are stored
                by another party, but that are shown on, in or through our
                banners.
              </p>
              <p>
                Should you encounter cookies on this website that fall into this
                category which we have not mentioned above, please let us know
                or contact the third party directly and ask which cookies they
                have placed, what the reason for this is, what the lifetime of
                the cookie is and in what way they have safeguarded your
                privacy.
              </p>
              <p>YOUR RIGHTS WITH REGARDS TO YOUR DATA</p>
              <p>
                Yieldlove does not view the banner advertising data it uses as
                personal data under the applicable law. Likewise, we do not
                collect or process sensitive personal data such as data on
                racial or ethnic origin, political opinions, religious or
                philosophical beliefs, trade union membership, health, or sex
                life. We also do not knowingly collect data from children under
                the age of 12.
              </p>
              <p>
                <strong>Use of Google AdSense / Doubleclick</strong>
              </p>
              <p>
                tellows uses Google Adsense, an advertisement service of Google
                Inc., Mountain View, USA („Google“). Google Adsense uses
                „Cookies“ which are stored by your browser (e.g. as small text
                files) on your computer and which allow an analysis of your
                usage of this website. Google Adsense also uses so-called „Web
                Beacons“ (little invisible images) to collect information. By
                using Web Beacons simple actions like visitor traffic on the
                website may be recorded and collected. The information about
                your usage of the website generated by the cookies and/or Web
                Beacons (including your IP address) will be transmitted to a
                server of Google in the United States of America and will be
                stored there. You can prevent the storage of cookies in your
                browser.
              </p>
              <p>
                In the event that personal data is transferred to the USA,
                corresponding EU standard contracts (adequate guarantee for data
                processing in non-European countries) have been concluded with
                Google LLC. The EU standard contractual clauses used can be
                accessed via the URL{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32010D0087"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32010D0087
                </a>
                .
              </p>
              <p>
                Information collected by Google may be shared with third
                parties, by contract or by law, by Google. Google will not
                connect your IP address with other data you have stored.
                <br />
                With the corresponding settings on your web browser you can
                prevent the mentioned cookies from being stored on your PC.
                However, there is the possibility that the contents of this
                website can no longer be used to the same extent. By using this
                site, you consent to the processing of personal data by Google
                in the manner and for the purposes set out above.
              </p>
              <p>
                <a href="https://www.google.com/policies/privacy/">
                  Further information on the privacy policy of Google AdSense
                  can be found here
                </a>
              </p>
              <p>
                Here, you can disable Googe AdSense Cookies:{" "}
                <a href="https://www.google.com/settings/ads/anonymous">
                  https://www.google.com/settings/ads/anonymous
                </a>{" "}
                and{" "}
                <a href="https://www.google.com/policies/technologies/ads/">
                  https://www.google.com/policies/technologies/ads/
                </a>
              </p>
              <p>
                <strong>Use of the Facebook-Plugin</strong>
              </p>
              <p>
                On these websites, the plugins of the social network
                facebook.com are utilized, which are run by Facebook Inc., 1601
                S. California Ave, Palo Alto, CA 94304, USA („Facebook“). If you
                open a website of our web presence with such a plugin, a
                connection to the Facebook servers is established and the plugin
                is shown through a message to your browser. Hereby, the Facebook
                server is signalled about which websites of ours you have
                visited. If you are logged in as a member of Facebook at that
                time, Facebook will assign this information to your Facebook
                user account. By using the plugin functions (e.g. click on the
                „like“-buttons, writing of comments), this information is also
                attributed to your Facebook user account, which you can only
                prevent by logging out before using the plugins.
                <br />
                If you are not a member of Facebook, there is still the
                possibility that Facebook will find out and save your IP
                address. According to Facebook, only an anonymized IP address is
                stored. Further information on the gathering and usage of data
                by Facebook and your respective rights and possibilities to
                protect your privacy can be found in the{" "}
                <a href="https://www.facebook.com/about/privacy/">
                  privacy section on Facebook
                </a>
                .
              </p>
              <p>
                <strong>
                  Conversion Tracking Pixel of Facebook and Facebook Custom
                  Audience
                </strong>
              </p>
              <p>
                With your permission, tellows uses the “conversion tracking
                pixel” of the Facebook Inc., 1601 S. California Ave, Palo Alto,
                CA 94304, USA (Facebook). With this tool we can follow actions
                of the users after they saw or clicked a Facebook advertisement.
                Therefore we can record the efficiency of Facebook
                advertisements for statistical and market research purposes. The
                collected data is anonymous, which means we cannot see the
                personal data of the user. To our knowledge and your
                information, Facebook will store and process these data.
              </p>
              <p>
                Facebook is able to connect this data with your Facebook account
                and use it for its own advertisement purposes according to its
                own privacy policy you find under{" "}
                <a href="https://www.facebook.com/about/privacy/">
                  https://www.facebook.com/about/privacy/
                </a>
                . You are able to give permission to Facebook and its partners
                for the use of advertisement in and outside of Facebook. Storing
                of a cookie on your computer for these purposes is possible.
                Only users over 13 years of age can declare such permission. If
                you are younger please ask your legal guardian.
              </p>
              <p>
                Facebook users should note that tellows uses the Website Custom
                Audience communication tool from Facebook. For this purpose,
                so-called Facebook pixels are built into our websites. If you
                are a Facebook user, Facebook is thus able to assign your visit
                of our website pages to your Facebook user account. Further,
                Facebook can subsequently find out whether a particular Facebook
                ad was effective. The Facebook pixel also enables us to
                distribute ads to defined recipients via Facebook. For this
                purpose, we exclusively receive statistical data from Facebook
                that is not related to actual persons. The purpose of this
                measure is to optimize our website in terms of advertising
                appeal, market research, and demand-driven design. The
                pixel-based tracking activities are performed in a way that does
                not enable us to identify you personally and only marks users as
                visitors of our website in anonymized form for us.
              </p>
              <p>
                For more information on the purpose and extent of data
                collection and further processing and use of the data by
                Facebook as well as the options you have to protect your
                privacy, please refer to the Facebook data privacy policy that
                can be found at{" "}
                <a href="https://www.facebook.com/privacy/explanation">
                  https://www.facebook.com/privacy/explanation
                </a>
                . Right of revocation: Objections against the use of Facebook
                Website Custom Audiences can be made at{" "}
                <a href="https://www.facebook.com/ads/website_custom_audiences">
                  https://www.facebook.com/ads/website_custom_audiences
                </a>
                . For this, you must be logged in to Facebook.
              </p>
              <p>
                <strong>Google Fonts</strong>
              </p>
              <p>
                We are incorporating the fonts („Google Fonts“) provided by
                Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043,
                USA, to optimize web page loading rates. The integration of
                these web fonts is done by a server call, usually a Google
                server in the USA. The websites you have visited will be
                transferred to the server. Also, the IP address of the browser
                which has been used by the visitor of this website is stored by
                Google. The privacy policy can be found at:{" "}
                <a href="https://www.google.com/policies/privacy/">
                  https://www.google.com/policies/privacy/
                </a>{" "}
                and the opt-out at:{" "}
                <a href="https://adssettings.google.com/authenticated">
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
              <p>
                <strong>Google Library for Ajax and jQuery</strong>
              </p>
              <p>
                We use Ajax and jQuery’s JavaScript library to optimize the
                webpage’s loading rate. In this case, program libraries are
                retrieved from servers of the company Google LLC, 1600
                Amphitheater Parkway, Mountain View, CA 94043, USA (Google)
                specifically the Google CDN. If you have already used jQuery on
                another page of the Google CDN, your browser will use the cached
                copy. Otherwise, the required information will be downloaded. In
                doing so, your visited website will be sent to the Google
                server. Also, the IP address of your device is stored by Google.
                For more information, please visit:{" "}
                <a href="https://cloud.google.com/cdn/?hl=en">
                  https://cloud.google.com/cdn/?hl=en
                </a>{" "}
                and{" "}
                <a href="https://www.google.com/policies/privacy/?hl=en">
                  https://www.google.com/policies/privacy/?hl=en
                </a>
                . To prevent the execution of JavaScript, you can install a
                JavaScript Blocker.
              </p>
              <p>
                <strong>Google reCAPTCHA</strong>
              </p>
              <p>
                We use “Google reCAPTCHA” (hereinafter “reCAPTCHA”) on our
                websites. This service is provided by Google Inc., 1600
                Amphitheater Parkway, Mountain View, CA 94043, USA (“Google”).
                reCAPTCHA is used to check whether the data entered on our
                website (such as on a contact form) has been entered by a human
                or by an automated program. To do this, reCAPTCHA analyzes the
                behavior of the website visitor based on various
                characteristics. This analysis starts automatically as soon as
                the website visitor enters the website. For the analysis,
                reCAPTCHA evaluates various information (e.g. IP address, how
                long the visitor has been on the website, or mouse movements
                made by the user). The data collected during the analysis will
                be forwarded to Google.
              </p>
              <p>
                The reCAPTCHA analyses take place completely in the background.
                Website visitors are not advised that such an analysis is taking
                place.
                <br />
                Data processing is based on Art. 6 (1) (f) GDPR. The website
                operator has a legitimate interest in protecting its site from
                abusive automated crawling and spam.
              </p>
              <p>
                For more information about Google reCAPTCHA and Google’s privacy
                policy, please visit:
                <br />
                <a
                  href="https://policies.google.com/privacy?hl=en"
                  rel="nofollow"
                  target=" _blank"
                >
                  https://policies.google.com/privacy?hl=en
                </a>{" "}
                and{" "}
                <a
                  href="https://www.google.com/recaptcha/intro/android.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://www.google.com/recaptcha/intro/android.html
                </a>
              </p>
              <p>
                <strong>Google Maps</strong>
              </p>
              <p>
                We use the Google Maps service provided by Google LLC, 1600
                Amphitheater Parkway, Mountain View, CA 94043, USA, to
                illustrate the location of addresses. The privacy policy can be
                found at:{" "}
                <a href="https://www.google.com/policies/privacy/">
                  https://www.google.com/policies/privacy/
                </a>{" "}
                and the opt-out at:{" "}
                <a href="https://adssettings.google.com/authenticated">
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
              <p>
                Information about your use of our website (such as your IP
                address) is transferred to Google servers in the USA and stored
                there when you call up those sub-pages in which the Google Maps
                map is integrated. This occurs regardless of whether Google
                provides a user account via which you are logged in or whether
                no user account exists. If you are logged in to Google, your
                data will be directly assigned to your account. If you do not
                want your data to be associated with your Google profile, you
                must log out of your Google user account. Google stores your
                data (even for users who are not logged in) as usage profiles
                and evaluates them. You have the right to object to the creation
                of these user profiles, and you must contact Google to exercise
                this right.
              </p>
              <p>
                Google Ireland Limited ensures compliance with the level of data
                protection applicable in the EU by accepting and agreeing to the
                so-called EU standard contractual clauses on data protection.
              </p>
              <p>
                If you do not agree to the future transmission of your data to
                Google in the context of the use of Google Maps, you also have
                the option of completely deactivating the Google Maps web
                service by switching off the JavaScript application in your
                browser. Google Maps and thus also the map display on this
                website can then not be used.
                <br />
                These processing operations are only carried out when explicit
                consent is given in accordance with Art. 6 Para. 1 lit. a GDPR.
              </p>
              <p>
                <strong>OpenStreetMap</strong>
              </p>
              <p>
                This site uses the open source mapping tool „OpenStreetMap“
                (OSM) via an API. The provider is the OpenStreetMap Foundation.
                To use the functions of OpenStreetMap, it is necessary to store
                your IP address. This information is usually transmitted to a
                server of OpenStreetMap and stored there. The provider of this
                site has no influence on this data transmission.
              </p>
              <p>
                The use of OpenStreetMap is in the interest of an appealing
                presentation of our online offers and an easy location of the
                places indicated by us on the website. This constitutes a
                legitimate interest within the meaning of Art. 6 Para. 1 lit. f
                GDPR.
              </p>
              <p>
                By using our website, you consent to the processing of data by
                OpenStreetMap. The execution of data processing by OpenStreetMap
                can be prevented by deactivating the Javascript in your browser.
                However, this will prevent the OpenStreetMap map view from being
                displayed.
              </p>
              <p>
                More information on the handling of user data can be found on
                the{" "}
                <a
                  href="https://wiki.openstreetmap.org/wiki/Legal_FAQ"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  privacy page
                </a>{" "}
                of OpenStreetMap and here{" "}
                <a
                  href="https://wiki.openstreetmap.org/wiki/Legal_FAQ"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  http://wiki.openstreetmap.org/wiki/Legal_FAQ
                </a>
                .
              </p>
              <p>
                <strong>
                  ShareThis Social Media Buttons on the tellows Blog
                </strong>
              </p>
              <p>
                On our blog we use the service of ShareThis to provide social
                media sharing tools. ShareThis collects information via
                technical cookies placed on your browser, pixel tags, HTTP
                headers (or other communication protocols), and browser
                identifiers. No flash cookies or other locally stored objects
                (LSO) are used to circumvent user opt-out choices. ShareThis
                collects registration information and Usage Data. Usage Data
                collects and uses technical data relating to some of your
                browsing to display personalized advertisements, provide
                analytics, and data modeling based on social sharing.
              </p>
              <p>
                ShareThis does not at any point collect contact information such
                as your name, address, phone number, address, credit card
                information, or anything else that can allow us or our clients
                to contact you directly. ShareThis shares Usage Data, including
                audience segments, with advertisers, Publishers, and other data
                partners (all, “Our Customers”) for interest-based advertising,
                analytics and data modeling.
              </p>
              <p>
                The cookies used in connection with ShareThis have a storage
                period of up to 9 months.
                <br />
                For more information on the handling of user data, please refer
                to the ShareThis privacy policy at{" "}
                <a
                  href="https://SHARETHIS.COM/PRIVACY/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  HTTPS://SHARETHIS.COM/PRIVACY/
                </a>
                .
              </p>
              <p>
                <strong>SSL Encryption</strong>
              </p>
              <p>
                tellows uses SSL encryption for security and to protect the
                transmission of sensitive content, such as the requests you send
                to the site operator. You can recognize an encrypted connection
                by changing the address line of the browser from „http://“ to
                „https://“ and the lock symbol in your browser bar.
              </p>
              <p>
                If SSL encryption is enabled, the data you submit to us cannot
                be read by third parties.
              </p>
              <p>
                <strong>OpenID Login</strong>
              </p>
              <p>
                No registration is required to participate in the tellows forum.
                Comments can be submitted as a registered or unregistered user.
                An OpenID service can be used to register. Thereby, an existing
                account of another service (e.g. Google) is linked to the
                tellows website through an authentication system. No separate
                account is created on the tellows website. Linking an account
                through OpenID enables additional options for comments and
                account settings on tellows. OpenID users are registered with
                the e-mail address of the linked account. The e-mail address
                must always be accessible to the user in order to be contacted
                for possible queries on the part of tellows. The use of an
                invalid e-mail address is not permitted.
              </p>
              <p>
                The data entered during registration will be used for the
                purpose of using the website. Users may be informed by email
                about website- or registration-related information, such as
                changes in the scope of the offer or technical circumstances.
                The storage is based on our legitimate interests, as well as the
                user’s protection against misuse and other unauthorized use.
              </p>
              <p>
                <strong>tellows in Social Networks</strong>
              </p>
              <p>
                To also communicate with you on social networks and inform you
                about our services, we are represented there with our own pages.
                If you visit one of our social media pages, we are jointly
                responsible with the provider of the respective social media
                platform within the meaning of Art. 26 GDPR with regard to the
                processing operations triggered thereby which concern personal
                data.
              </p>
              <p>
                We are not the original provider of these pages, but merely use
                them within the scope of the possibilities offered to us by the
                respective providers.
                <br />
                As a precaution, we therefore point out that your data may also
                be processed outside the European Union or the European Economic
                Area. Use may therefore entail data protection risks for you, as
                it may be more difficult to protect your rights, e.g. to
                information, deletion, objection, etc., and the processing in
                the social networks often takes place directly for advertising
                purposes or for the analysis of user behaviour by the providers,
                without this being able to be influenced by us. If usage
                profiles are created by the provider, cookies are often used or
                the usage behaviour is directly assigned to your own member
                profile of the social networks (if you are logged in here).
                <br />
                The described processing of personal data is carried out in
                accordance with Art. 6 Para. 1 lit. f GDPR on the basis of our
                legitimate interest and the legitimate interest of the
                respective provider in order to be able to communicate with you
                in a timely manner or to inform you about our services. If you
                have to give your consent to data processing as a user with the
                respective providers, the legal basis refers to Art. 6 (1) lit.
                a GDPR in conjunction with Art. 7 GDPR.
              </p>
              <p>
                As we do not have access to the providers‘ databases, we would
                like to point out that it is best to exercise your rights (e.g.
                to information, correction, deletion, etc.) directly with the
                respective provider. Further information on the processing of
                your data in the social networks and the possibility to make use
                of your right of objection or revocation (so-called opt-out) is
                listed below at the respective provider of social networks used
                by us:
              </p>
              <p>
                <b>Facebook</b>
                <br />
                (Co-) controller for data processing in Europe:
                <br />
                Facebook Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour,
                Dublin 2, Ireland.
                <br />
                Privacy Policy (Data Policy):
                <br />
                <a
                  href="https://www.facebook.com/about/privacy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/about/privacy
                </a>
                <br />
                Opt-out and advertising preferences:
                <br />
                <a
                  href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
                </a>
                <br />
                Facebook ensures compliance with the level of data protection
                applicable in the EU by accepting and agreeing to the so-called
                EU standard contractual clauses on data protection.
                <br />
                <a
                  href="https://www.facebook.com/about/privacy/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/about/privacy/
                </a>
              </p>
              <p>
                <b>Instagram</b>
                <br />
                (Co-)responsible for data processing in Europe:
                <br />
                Facebook Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour,
                Dublin 2, Ireland.
                <br />
                Privacy Policy (Data Policy):
                <br />
                <a
                  href="https://instagram.com/legal/privacy/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  http://instagram.com/legal/privacy/
                </a>
                <br />
                Opt-out and advertising preferences:
                <br />
                <a
                  href="https://www.instagram.com/accounts/privacy_and_security/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.instagram.com/accounts/privacy_and_security/
                </a>
                <br />
                Instagram ensures compliance with the level of data protection
                applicable in the EU by accepting and agreeing to the so-called
                EU standard contractual clauses on data protection.
              </p>
              <p>
                <b>LinkedIn</b>
                <br />
                (Co-) controller for data processing in Europe:
                <br />
                LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2,
                Ireland.
                <br />
                Privacy Policy:
                <br />
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
                <br />
                Opt-out and advertising preferences:
                <br />
                <a
                  href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
                </a>
              </p>
              <p>
                <b>Twitter</b>
                <br />
                Data controller in Europe:
                <br />
                Twitter International Company, One Cumberland Place, Fenian
                Street, Dublin 2, D02 AX07, Ireland.
                <br />
                Privacy Policy:
                <br />
                <a
                  href="https://twitter.com/en/privacy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/en/privacy
                </a>
                <br />
                Information about your data:
                <br />
                <a
                  href="https://twitter.com/settings/your_twitter_data"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/settings/your_twitter_data
                </a>
                <br />
                Opt-out and advertising preferences:
                <br />
                <a
                  href="https://twitter.com/personalization"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/personalization
                </a>
              </p>
              <p>
                <strong>Comments in the Forum</strong>
              </p>
              <p>
                When you post or rate a comment in the forum, your IP address
                will be stored. This is a security measure, in case someone
                publishes illegal content (insults, prohibited political
                propaganda, etc.). In this case, tellows could be prosecuted for
                the content. Therefore, we are interested in the identity of the
                comment author.
              </p>
              <p>
                It is possible to subscribe to the number pages. To do so, you
                must enter your e-mail address. You will receive a confirmation
                email to verify that you are the owner of the entered email
                address. You can unsubscribe from the notifications at any time.
                The confirmation email contains instructions.
              </p>
              <p>
                <strong>
                  Right of removal of comments on a telephone number
                </strong>
              </p>
              <p>
                On tellows, every user can leave comments regarding any
                telephone number. These comments represent the opinion of the
                comment’s author and&nbsp;
                <strong>not the opinion of tellows on that phone number</strong>
                . Which is why we created an option to delete comments. Under
                every comment, there is a button called „Report the comment as
                spam“. With a simple click on this button, comments are directly
                deleted. Comments from registered users who have a tellows
                account cannot be removed by other users. In this case it is
                necessary to inform us by email to kontaktATtellows.de about the
                removal request. Registered tellows users have the opportunity
                to comment on the deletion request within 48 hours. If no
                credible statement is made, the comment will be removed. More
                information about comment removals for registered users can be
                found{" "}
                <a
                  href="https://tellows.de/c/about-tellows-uk/terms-of-use/#termsofuseforum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                <strong>Right of Information</strong>
              </p>
              <p>
                You have the right to obtain the information about your person
                any time. If you have further questions regarding the privacy
                policy or need more information on a certain point, you can
                contact our data protection officer at datenschutzATtellows.de
                (replace AT with a @).
              </p>
              <p>
                <strong>Right to Erasure</strong>
              </p>
              <p>
                The data subject shall have the right to obtain from the
                controller the erasure of personal data concerning him or her
                without undue delay and the controller shall have the obligation
                to erase personal data without undue delay where one of the
                following grounds applies:
              </p>
              <ul>
                <li>
                  the personal data are no longer necessary in relation to the
                  purposes for which they were collected or otherwise processed;
                </li>
                <li>
                  the data subject withdraws consent on which the processing is
                  based according to point a of Art. 6 s. 1, or point a of Art.
                  9 s. 2, and where there is no other legal ground for the
                  processing;
                </li>
                <li>
                  the data subject objects to the processing pursuant to Art. 21
                  s. 1 and there are no overriding legitimate grounds for the
                  processing, or the data subject objects to the processing
                  pursuant to Art. 21 s. 2;
                </li>
                <li>the personal data has been unlawfully processed;</li>
                <li>
                  the personal data has to be erased for compliance with a legal
                  obligation in Union or Member State law to which the
                  controller is subject;
                </li>
                <li>
                  the personal data has been collected in relation to the offer
                  of information services referred to in Art. 8 s. 1.
                </li>
              </ul>
              <p>
                Where the controller has made the personal data public and is
                obliged to erase the personal data, the controller, taking
                account of available technology and the cost of implementation,
                shall take reasonable steps, including technical measures, to
                inform controllers which are processing the personal data that
                the data subject has requested the erasure by such controllers
                of any links to, or copy, or replication of, those personal
                data.
              </p>
              <p>
                This right shall not apply to the extent that processing is
                necessary for erasure (“right to be forgotten”). This includes
                the following requirements:
              </p>
              <ul>
                <li>
                  exercising the right of freedom of expression and information;
                </li>
                <li>
                  compliance with a legal obligation which requires processing
                  by Union or Member State law to which the controller is
                  subject or for the performance of a task carried out in the
                  public interest or in the exercise of official authority
                  vested in the controller;
                </li>
                <li>the establishment, exercise or defence of legal claims.</li>
              </ul>
              <p>
                <strong>Right to Restriction of Processing</strong>
              </p>
              <p>
                The data subject shall have the right to obtain from the
                controller restriction of processing where one of the following
                applies:
              </p>
              <ul>
                <li>
                  the accuracy of the personal data is contested by the data
                  subject, for a period enabling the controller to verify the
                  accuracy of the personal data;
                </li>
                <li>
                  the processing is unlawful and the data subject opposes the
                  erasure of the personal data and requests the restriction of
                  their use instead;
                </li>
                <li>
                  the controller no longer needs the personal data for the
                  purposes of the processing, but they are required by the data
                  subject for the establishment, exercise or defence of legal
                  claims;
                </li>
                <li>
                  the data subject has objected to processing pursuant to Art.
                  21 s. 1 pending the verification whether the legitimate
                  grounds of the controller override those of the data subject.
                </li>
              </ul>
              <p>
                Where processing has been restricted under s. 1, such personal
                data shall, with the exception of storage, only be processed
                with the data subject’s consent or for the establishment,
                exercise or defence of legal claims or for the protection of the
                rights of another natural or legal person or for reasons of
                important public interest of the Union or of a Member State.
              </p>
              <p>
                In order to allege the right to restriction of processing, the
                data subject can contact us at any time under
                datenschutzATtellows.de (replace AT with @).
              </p>
              <p>
                <strong>Right to Data Portability</strong>
              </p>
              <p>
                The data subject shall have the right to receive the personal
                data concerning him or her, which he or she has provided to a
                controller, in a structured, commonly used and machine-readable
                format and has the right to transmit this data to another
                controller without hindrance from the controller to which the
                personal data has been provided, where:
              </p>
              <ul>
                <li>
                  the processing is based on consent pursuant to point a of Art.
                  6 s. 1 or point a of Art. 9 s. 2 or on a contract pursuant to
                  point b of Article 6 s.1 GDPR; and
                </li>
                <li>the processing is carried out by automated means.</li>
              </ul>
              <p>
                In exercising his or her right to data portability pursuant to
                s. 1, the data subject shall have the right to have the personal
                data transmitted directly from one controller to another, where
                technically feasible. The exercise of the right of removal shall
                be unaffected. That right shall not apply to processing
                necessary for the performance of a task carried out in the
                public interest or in the exercise of official authority vested
                in the controller.
              </p>
              <p>
                <strong>Right to Object</strong>
              </p>
              <p>
                The data subject shall have the right to object, on grounds
                relating to his or her particular situation, at any time to
                processing of personal data concerning him or her which is based
                on point e or f of&nbsp;Art. 6 s. 1, including profiling based
                on those provisions.
              </p>
              <p>
                The controller shall no longer process the personal data unless
                the controller demonstrates compelling legitimate grounds for
                the processing which override the interests, rights and freedoms
                of the data subject or for the establishment, exercise or
                defence of legal claims.
              </p>
              <p>
                Where personal data are processed for direct marketing purposes,
                the data subject shall have the right to object at any time to
                processing of personal data concerning him or her for such
                marketing, which includes profiling to the extent that it is
                related to such direct marketing.
              </p>
              <p>
                In the context of the use of information society services, and
                notwithstanding Directive 2002/58/EC, the data subject may
                exercise his or her right to object by automated means using
                technical specifications.
              </p>
              <p>
                Please contact datenschutzATtellows.de for an objection (replace
                AT with @).
              </p>
              <p>
                <strong>
                  Automated Individual Decision-Making, Including Profiling
                </strong>
              </p>
              <p>
                The data subject shall have the right not to be subject to a
                decision based solely on automated processing, including
                profiling, which produces legal effects concerning him or her or
                similarly significantly affects him or her. This shall not apply
                if the decision:
              </p>
              <ul>
                <li>
                  is necessary for entering into, or performance of, a contract
                  between the data subject and a data controller;
                </li>
                <li>
                  is authorised by Union or Member State law to which the
                  controller is subject and which also lays down suitable
                  measures to safeguard the data subject’s rights and freedoms
                  and legitimate interests; or
                </li>
                <li>is based on the data subject’s explicit consent.</li>
              </ul>
              <p>
                In these cases, the data controller shall implement suitable
                measures to safeguard the data subject’s rights and freedoms and
                legitimate interests, at least the right to obtain human
                intervention on the part of the controller, to express his or
                her point of view and to contest the decision.
              </p>
              <p>
                This right can be exercised by the affected person at any time
                by addressing himself to the responsible person.
              </p>
              <p>
                <strong>Right to Complain to a Regulating Authority</strong>
              </p>
              <p>
                Without prejudice to any other administrative or judicial
                remedy, you have the right to complain to a regulating
                authority, in particular in the Member State of your residence,
                place of work or place of alleged infringement, if the person in
                subject considers that the processing of the personal data
                infringes this Regulation.
              </p>
              <p>
                <strong>Right to Effective Legal Remedy</strong>
              </p>
              <p>
                Without prejudice to any available administrative or non-legal
                remedy, including the right to lodge a complaint with a
                supervisory authority pursuant to Art. 77, each data subject
                shall have the right to an effective legal remedy where he or
                she considers that his or her rights under this Regulation have
                been infringed as a result of the processing of his or her
                personal data in non-compliance with this Regulation.
              </p>
              <p>
                <strong>Questions about Privacy</strong>
              </p>
              <p>
                If further questions or suggestions regarding the subject of
                privacy might arise, please contact our data privacy officer
                Christian Anton at datenschutzATtellows.de (replace the AT with
                @).
              </p>
              <h2>
                <div id="apps">
                  <strong>Use of Data in the tellows Applications</strong>
                </div>
              </h2>
              <p>
                <a
                  href="https://www.tellows.de/c/about-tellows-de/datenschutz/#apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of Data in tellows Applications (German)
                </a>
                <br />
                <a
                  href="https://www.tellows.it/c/about-tellows-it/norme-sulla-privacy/#apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of Data in tellows Applications (Italian)
                </a>
                <br />
                <a
                  href="https://www.tellows.fr/c/about-tellows-fr/regles-de-confidentialite/#apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of Data in tellows Applications (French)
                </a>
                <br />
                <a
                  href="https://www.tellows.es/c/about-tellows-es/politica-de-privacidad/#apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of Data in tellows Applications (Spanish)
                </a>
                <br />
                <a
                  href="https://www.tellows.pt/c/about-tellows-pt/politica-de-privacidade/#apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of Data in tellows Applications (Portuguese)
                </a>
              </p>
              <p>
                At tellows, we are keenly aware of the trust you place in us and
                our responsibility to protect your privacy. We comply with the
                data protection regulations of the European Union regarding your
                personal data. This disclaimer refers only to our tellows
                applications. Third parties might offer hyperlinks to other
                websites which may have information policies and practices
                different from ours. We do not control and are not responsible
                for the privacy policies, practices, or the content of any third
                party Web sites. Once you’ve left our websites via such a link
                or by clicking on an advertisement, you should check the
                applicable privacy policy of the third party or advertiser site
                to determine how they will handle any information they collect
                from you.
              </p>
              <p>
                tellows uses the submitted comments and ratings from the tellows
                website and applications to evaluate telephone numbers in
                applications. No personal data of the comment’s author is used
                or stored in this process. Only the submitted comments and the
                resulting ratings are used to categorize the telephone numbers.
                Applications, based on this information are run by tellows and
                by third parties working in a contractual relationship.
              </p>
              <h3>tellows iOS Applications</h3>
              <p>
                To ensure the full extent of the premium iOS-applications
                “tellows pro Caller ID” and “tellows – Reverse Search” features,
                during installation, the creation of three new contacts in your
                smartphone is necessary. In these contacts, the score lists are
                saved, giving its user information about the type and rating of
                an undesired caller. During installation, the approval to access
                the smartphone’s contacts is a requirement. Personal contacts
                and data is not accessed. The iPhone app „tellows Caller ID
                &amp; Block“ imports the score lists into the internal storage
                of the iPhone.
                <br />
                The detailed terms of use for the iPhone apps can be found here:
                <br />
                <a href="https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseapp">
                  https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseapp
                </a>
              </p>
              <h3>tellows Android app</h3>
              <p>
                At tellows, we are keenly aware of the trust you place in us and
                our responsibility to protect your privacy. To better protect
                your privacy we provide this notice explaining of our online
                information practices, including how we collect and use the
                information you may provide to us on the website, and the
                choices you can make about the way your information is collected
                and used. We comply with the data protection regulations of the
                European Union regarding your personal data. This disclaimer
                refers only to our sites and app „tellows – Caller ID &amp;
                Block“. Third parties might offer hyperlinks to other websites
                which may have information policies and practices different from
                ours. We do not control and are not responsible for the privacy
                policies, practices, or the content of any third party Web
                sites. Once you\’ve left our websites via such a link or by
                clicking on an advertisement, you should check the applicable
                privacy policy of the third party or advertiser site to
                determine how they will handle any information they collect from
                you.
              </p>
              <p>
                <b>Use of data in the tellows Application</b>
                <br />
                The tellows Android app registers incoming calls and sends the
                phone number to tellows to compare it with the blacklist and
                block it if necessary. With the submission of comments and the
                resulting ratings, phone numbers are classified. When a rating
                is submitted, the rated telephone number and the associated data
                such as comment and user name are sent to tellows. When a rating
                is submitted, the IP address is also transmitted to tellows. The
                removal of content can be done with the help of a spam button.
                Telephone numbers of incoming calls are sent to our server to
                provide anonymised caller statistics and activities on spam
                telephone numbers. Numbers from your own contacts are not
                transferred to tellows if contact sharing permission has been
                granted. When using the premium version, a personal block list
                is imported into the phone, which is used to identify and block
                the numbers on the block list. The phone number is added by the
                application. Personal contacts and data remain unaffected.
              </p>
              <p>
                <b>Permissions of the tellows Android app</b>
                <br />
                To ensure the full functionality of the tellows app, the
                following permissions must be granted prior to use:
              </p>
              <ul>
                <li>
                  <b>Call logs</b>
                  <br />
                  Comparison of telephone numbers with the tellows database and
                  assignment of a scoring, if the telephone number of the
                  incoming call does not exist in your existing contacts.
                </li>
                <li>
                  <b>Make and manage phone calls</b>
                  <br />
                  View caller information or block the phone number during an
                  incoming call. Therefore unknown phone numbers from incoming
                  calls are sent to our servers.
                </li>
                <li>
                  <b>Contacts</b>
                  <br />
                  Granting the permission to share contacts ensures that only
                  unknown phone numbers are checked by tellows and no contacts
                  that you already know. With the permission contacts are
                  excluded from identification and do not receive a tellows
                  scoring. Personal contacts will not be sent to tellows.
                </li>
                <li>
                  <b>Receive SMS (optional)</b>
                  <br />
                  View information about unknown phone number after receiving
                  SMS.
                </li>
              </ul>
              <p>
                <b>Personal data</b>
                <br />
                Personal data is individual information about personal and
                factual circumstances of an identified or identifiable natural
                person. In other words, information that identifies a person or
                at least makes him or her identifiable. All this data is subject
                to special protection in accordance with data protection
                regulations, which we ensure on tellows and the associated
                applications through technical and organisational measures. This
                data is only used for the purpose of statistical evaluations and
                to optimise the website, as well as to prevent misuse.
              </p>
              <p>
                The following data is collected when you use the tellows app or
                mobile website:
              </p>
              <ul>
                <li>Referrer URL (entry page reached via tellows)</li>
                <li>Browser type/version</li>
                <li>Operating system used</li>
                <li>Internet pages viewed during the visit to tellows</li>
                <li>IP address (host name of the accessing computer)</li>
                <li>The date and time of the server request</li>
              </ul>
              <p>
                The detailed terms of use for the Android App can be found here:
                <br />
                <a href="https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseappandroid">
                  https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseappandroid
                </a>
              </p>
              <h3>Use of Google Admob in the Android Application</h3>
              <p>
                For advertising, we use the advertising partner AdMob Google
                Inc. (1600 Amphitheater Parkway, Mountain View, CA 94043, USA).
                Admob stores user data in order to display ads that are relevant
                to you. These ads appear only in the free app version. Google
                Admob uses cookies that are stored on your computer and that
                allow you to analyze the use of the app by you. In addition,
                Google Admob also uses so-called „web beacons“ (small invisible
                graphics) to collect and evaluate simple actions such as visitor
                traffic on the website. The information about the usage of this
                app generated by the cookie and / or web beacon (including your
                IP address) is usually transmitted to and stored by Google on
                servers in the United States. Google uses the obtained
                information to evaluate your usage behavior with respect to the
                Google Admob ads. The IP address submitted by your browser will
                not be merged with other Google data. The information collected
                by Google may be transferred to third parties, if required by
                law and / or as far as third parties process this data on behalf
                of Google. You may permanently opt-out of setting a cookie by
                changing the settings on your browser software or by downloading
                and installing the browser plug-in available at the following
                link:{" "}
                <a
                  href="https://www.google.com/settings/ads/plugin?hl=en"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  http://www.google.com/settings/ads/plugin?hl=en
                </a>
              </p>
              <p>
                Please note that certain features of this app may not be used or
                may be of limited use if you have objected to the use of
                cookies.
              </p>
              <p>
                The data generated in this context can be transmitted by Google
                to a server in the USA for evaluation and stored there. In the
                event that personal data is transferred to the USA,
                corresponding EU standard contracts (appropriate guarantee for
                data processing in non-European countries) have been concluded
                with Google LLC. You can find the EU standard contractual
                clauses used via the URL{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32010D0087&amp;from=EN"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32010D0087&amp;from=EN
                </a>
                .{" "}
              </p>
              <h3>
                Use of Google Firebase in the Android and iOS Applications
              </h3>
              <p>
                Our app uses Google Firebase technology (Google Inc., 1600
                Amphitheater Parkway, Mountain View, CA 94043, USA, „Google“).
                Firebase is part of the Google Cloud Platform and offers many
                services to developers. Some Firebase services process personal
                information. In most cases, the personal data is limited to
                so-called „instance IDs“ that are time-stamped. Firebase\’s
                Instance IDs are unique, allowing you to link different events
                or processes. These data are neither personally identifiable
                information nor do we make efforts to personalize it afterwards.
                We process this summarized data for the analysis and
                optimization of the usage behavior, as for example by the
                evaluation of crash reports. We do not use Firebase services
                that use personally identifiable information, such as IP
                addresses, e-mail addresses, telephone numbers or passwords.
              </p>
              <p>
                The data generated in this context can be transmitted by Google
                to a server in the USA for evaluation and stored there. In the
                event that personal data is transferred to the USA,
                corresponding EU standard contracts (appropriate guarantee for
                data processing in non-European countries) have been concluded
                with Google LLC. You can find the EU standard contractual
                clauses used via the URL{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32010D0087&amp;from=EN"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32010D0087&amp;from=EN
                </a>
                .
              </p>
              <p>
                More information on Google Firebase and privacy can be found at{" "}
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://www.google.com/policies/privacy/
                </a>{" "}
                as well as{" "}
                <a
                  href="https://firebase.google.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://firebase.google.com/
                </a>
                .
              </p>
              <h3>Use of Crashlytics in the Android and iOS Applications</h3>
              <p>
                Our app uses the analytical tools from Crashlytics, 1 Kendall
                Square, Cambridge, MA 02139, USA. It uses information about the
                device, the version of the app you have installed, and other
                information that can help troubleshoot errors. These relate
                primarily to the software and hardware of the user. No personal
                data will be transmitted. Only real-time crash reports will be
                sent, with details of codes and device information designed to
                simplify maintenance and improve the resulting stability of the
                app. This tool uses anonymized IP addresses for analysis
                purposes. Therefore, it cannot be determined who is the user of
                the IP address concerned.
              </p>
              <h3>Use of Facebook SDK in the Android and iOS Applications</h3>
              <p>
                Furthermore, the app uses the so-called Facebook Software
                Development Kit (SDK). The Facebook SDK is published and
                administered by Facebook Inc., 1601 S. California Ave., Palo
                Alto, CA 94304, USA („Facebook“) (legal basis is Art. 6 (1) lit.
                GDPR) The use of the Facebook SDK enables us to optimize the
                advertising success on Facebook via the app by, for example, not
                displaying ads on those devices on which the app is already
                installed. For this purpose, the app transmits the following
                pseudonymized data to Facebook: The App ID (identical on all
                devices), the information that the app has been started and
                provided by the operating system of the device Advertising
                Identifier (IDFA). Further data will not be transmitted to
                Facebook. We also do not receive any data back from Facebook
                that could allow us to identify users.
              </p>
              <p>
                By using the app, the user declares their consent to the
                integration of the Facebook SDK and the associated collection,
                storage, transfer and processing of user data to the extent
                described. The information collected in this way is not linked
                to personal information from tellows users in the analysis
                software. In this context, user data can also be transmitted to
                servers in the USA.
              </p>
              <h3>Right of Information</h3>
              <p>
                You have the right to obtain the information about your person
                any time. If you have further questions regarding the privacy
                policy or need more information on a certain point, you can
                contact our data protection officer at{" "}
                <a href="mailto:datenschutz@tellows.de">
                  datenschutz@tellows.de
                </a>
                .
              </p>
              <h3>Right of removal of comments on a telephone number</h3>
              <p>
                On tellows, every user can leave comments regarding any
                telephone number. These comments represent the opinion of the
                comment’s author and not the opinion of tellows on that phone
                number. Which is why we created an option to delete comments.
                Under every comment in the mobile version of the website (not in
                the app), there is a button called „Report the comment as spam“.
                With a simple click on this button, comments are directly
                deleted.
              </p>
              <h3>Questions about Privacy</h3>
              <p>
                If further questions or suggestions regarding the subject of
                privacy might arise, please contact our data privacy officer
                Christian Anton at{" "}
                <a href="mailto:datenschutz@tellows.de">
                  datenschutz@tellows.de
                </a>
                .
              </p>
              <h1 id="it">Pravilnik o zasebnosti</h1>
              <p>
                <strong>Splošno</strong>
              </p>
              <p>
                V govorih se močno zavedamo zaupanja, ki ga postavljate v nas,
                in naše odgovornosti, da zaščitimo vašo zasebnost. Za boljšo
                zaščito vaše zasebnosti v tem obvestilu pojasnjujemo naše
                spletne prakse obveščanja, vključno s tem, kako zbiramo in
                uporabljamo informacije, ki nam jih lahko posredujete na
                spletnem mestu, in izbire, ki jih lahko naredite glede načina
                zbiranja in uporabe vaših podatkov. Upoštevamo predpise o
                varstvu podatkov Evropske unije glede vaših osebnih podatkov.
              </p>
              <p>
                Ta izjava o omejitvi odgovornosti se nanaša samo na naša spletna
                mesta. Tretje osebe lahko ponudijo hiperpovezave drugim spletnim
                mestom, ki imajo lahko informacijske politike in prakse drugačne
                od naših. Ne nadzorujemo in ne odgovarjamo za pravilnike o
                zasebnosti, prakse ali vsebino katerekoli spletne strani tretjih
                oseb. Ko pustite naše spletne strani prek takšne povezave ali s
                klikom na oglas, preverite veljavno politiko zasebnosti tretje
                osebe ali oglaševalske strani, da ugotovite, kako bodo ravnali z
                vsemi informacijami, ki jih zbirajo od vas.
              </p>
              <p>
                Osebni podatki so posamezni podatki o osebnih ali dejanskih
                okoliščinah določene ali določljive fizične osebe. Informacije,
                ki lahko identificirajo osebo ali jo prepoznajo.
              </p>
              <p>
                V nadaljevanju bomo razložili, katere informacije se zbirajo in
                za kakšen namen.
              </p>
              <p>
                <strong>Zbiranje in obdelava podatkov</strong>
              </p>
              <p>
                Potrjujemo, da se zbiranje, obdelava in uporaba osebnih podatkov
                izvaja v skladu z vsemi predpisi o varstvu podatkov in je v
                skladu z zgoraj omenjenimi zakoni, zlasti z Art. 6 s. 1 a. To
                pomeni, da obdelujemo podatke samo v primeru legitimnega
                interesa po čl. 6 s. 1 f GDPR (npr. Za analizo, optimizacijo in
                zaščito ponujenih spletnih ponudb) ali z dovoljenjem obdelave
                uporabnika (npr. Sprejemanje zahtev).
              </p>
              <p>
                Imamo tehnično (npr. SSL šifriranje), pogodbeno (npr. Pogodbo za
                obdelavo podatkov) in organizacijske ukrepe (npr. Omejitve
                dostopa), da zagotovimo upoštevanje pravil GDPR in da so podatki
                varni pred dostopom in manipulacijo.
              </p>
              <p>
                Dostop do naše spletne strani je brez kakršnihkoli osebnih
                podatkov. Prav tako smo sprejeli ukrepe za anonimizacijo (glej
                odstavek Google Analytics), to pomeni, da pridobitev analitičnih
                podatkov služi samo izboljšanju ponudbe in ne omogoča nobenih
                sklepov o posameznikih.
              </p>
              <p>
                Obdelujemo naslednje kategorije podatkov, ki so pomembni za
                uporabo spletnega mesta in storitev namigi ali so potrebni za
                vzpostavitev stika:
              </p>
              <p>– glavni podatki (npr. ime)</p>
              <p>– kontaktni podatki (npr. telefonska številka, e-pošta)</p>
              <p>
                – podatki o vnosu vsebine (npr. vnos besedila / komentarja, čas
                dostopa)
              </p>
              <p>– meta podatki (npr. naslov IP)</p>
              <p>
                <strong>Sodelovanje s tretjimi strankami</strong>
              </p>
              <p>
                Prenos podatkov tretjim osebam se zgodi le v skladu z zakonskimi
                zahtevami. Podatke posredujemo tretjim osebam samo z dovoljenjem
                v skladu s čl. 6 s. 1 GDPR ali na podlagi upravičenega interesa
                po čl. 6 s. 1 f GDPR pri učinkovitem in ekonomičnem poslovanju v
                našem podjetju.
              </p>
              <p>
                Odobritev obdelave podatkov s strani tretjih oseb je podana na
                podlagi podpisane pogodbe DAV / DPA (pogodba o obdelavi
                podatkov) v skladu s čl. 28 GDPR.
              </p>
              <p>
                <strong>Prenos v tretje države</strong>
              </p>
              <p>
                Prenos ali obdelava podatkov tretjim državam (tj. Zunaj EGP
                (Evropskega gospodarskega prostora)) se izrecno odobri le, če
                izpolnjuje zakonsko obveznost ali je za nas upravičen. Npr. pri
                uporabi storitev tretjih oseb. V tem primeru obdelava podatkov
                temelji na dejstvu, da je Evropska komisija ugotovila, da
                obstaja raven varstva podatkov, podobna tisti v EU, ste nam dali
                izjavo o soglasju ali smo se strinjali s standardnimi
                pogodbenimi klavzulami za zaščito vaših podatkov pri ponudniku.
              </p>
              <p>
                <strong>Osebni podatki</strong>
              </p>
              <p>
                Zbiramo in shranjuva podatke v evidenčnih datotekah v skladu s
                čl. 6 s. 1 f GDPR (npr. Za reševanje primerov zlorabe ali
                prevažanja), ki nam jih vaš spletni brskalnik po naročilu
                samodejno prenese. Zbirajo se naslednji podatki:
              </p>
              <ul>
                <li>
                  URL napotitelja (stran, na katero so bili dostopni podatki)
                </li>
                <li>vrsta brskalnika / -version</li>
                <li>Uporabljen operacijski sistem</li>
                <li>Spletne strani, ki so si jih ogledali med ogledom</li>
                <li>IP naslov (ime gostitelja dostopnega računalnika)</li>
                <li>Datum in čas zahteve za strežnik</li>
                <li>Preneseni podatkovni volumen</li>
                <li>Zahtevaj ponudnika</li>
              </ul>
              <p>
                Za vse te podatke velja posebna zaščita v skladu s predpisi
                zakona o varstvu podatkov, ki jih po iztiskanju in ustreznih
                aplikacijah jamčimo s tehničnimi in obveznimi ukrepi. Te podatke
                ni mogoče dodeliti nobeni določeni osebi. Združevanje teh
                podatkov z drugimi viri podatkov ne bo opravljeno.
              </p>
              <p>
                Iz varnostnih razlogov so podatki dnevnika shranjeni največ 7
                dni in nato izbrisani. Pridržujemo si pravico do daljšega
                shranjevanja naslovov IP za namene kazenskega pregona v primeru
                kršitve naših pogojev uporabe.
              </p>
              <p>
                <strong>Uporaba piškotkov</strong>
              </p>
              <p>
                Za razporejanje vaših zahtev iz interneta uporabljamo tako
                imenovane piškotke. Te majhne datoteke se samodejno shranjujejo
                na vašem trdem disku vašega brskalnika v času vašega bivanja na
                naši spletni strani in so potrebne za natančno uporabo našega
                spletnega mesta. Ko končate bivanje na naši spletni strani,
                lahko piškotke izbrišete z določenimi konfiguracijami v vašem
                brskalniku. Služijo, da bo naša spletna stran bolj uporabniku
                prijazna, učinkovita in varna.
              </p>
              <p>
                Naše spletne ponudbe so uporabne tudi pod izključitvijo
                piškotkov. Če v računalniku ne želite shranjevati piškotkov,
                lahko v sistemskih nastavitvah brskalnika izključite ustrezno
                možnost. Shranjene piškotke lahko izbrišete v sistemskih
                nastavitvah brskalnika. Izključitev piškotkov lahko privede do
                funkcionalnih omejitev te spletne ponudbe.
              </p>
              <p>
                Možnost množičnega spletnega oglaševanja piškotkov podjetij je
                podana na spletni strani ZDA{" "}
                <a href="http://www.aboutads.info/choices">
                  http://www.aboutads.info/choices
                </a>{" "}
                ali na evropski spletni strani{" "}
                <a href="http://www.youronlinechoices.com/uk/your-ad-%20choices/">
                  http://www.youronlinechoices.com/uk/your-ad- choices/
                </a>
              </p>
              <p>
                <strong>Uporaba storitve Google Analytics</strong>
              </p>
              <p>
                tellows uporablja Google Analytics, ki je spletna storitev
                analize, ki jo ponuja Google Inc. („Google“), 1600 Amphitheater
                Parkway, Mountain View, CA 94043, ZDA.
              </p>
              <p>
                Spletna analiza je zbiranje, shranjevanje in analiza podatkov o
                vedenju obiskovalcev spletnih strani. Storitev spletne analize
                zbira podatke, vključno s spletno stranjo, na katero je
                prizadeta oseba prišla na spletno mesto (tako imenovane
                napotitelje), do katerih podstrani je bilo dostopno spletno
                mesto ali kako pogosto in za koliko časa je bila ogledana
                podstrana. Spletna analiza se uporablja predvsem za optimizacijo
                spletne strani in analizo stroškov in koristi spletnega
                oglaševanja.
              </p>
              <p>
                Google Analytics uporablja tako imenovane »piškotke«, ki so
                besedilne datoteke, ki so shranjene v računalniku, in vam
                omogočajo, da analiziramo uporabo vaše spletne strani.
                Informacije o vaši uporabi te spletne strani, ki se ustvari s
                piškotkom, se v večini primerov prenesejo na Googlov strežnik v
                ZDA in se tam shranijo. Če pa je anonimizacija IP aktivirana na
                tej spletni strani in ste v državi članici Evropske unije ali v
                drugi državi pogodbenici Sporazuma o evropskem gospodarskem
                prostoru, bo vaš naslov IP najprej skrajšal Googlov.
              </p>
              <p>
                Samo v izjemnih primerih bo vaš celotni IP naslov prenesen na
                Googlov strežnik v ZDA in tam skrajšan. Google bo te podatke
                uporabil v imenu upravljavca te spletne strani, da bi analiziral
                vašo uporabo te spletne strani, pripravil poročila o dejavnostih
                spletnega mesta in naredil dodatne storitve, povezane z uporabo
                spletne strani in interneta za operaterja tega spletnega mesta.
              </p>
              <p>
                Google IP-naslov, ki ga vaš brskalnik zagotovi v okviru storitve
                Google Analytics, ne bo združil z drugimi podatki. Shranjevanje
                piškotkov lahko preprečite s pomočjo nastavitve v programski
                opremi brskalnika; vendar vam svetujemo, da v tem primeru morda
                ne boste mogli v celoti izkoristiti vseh funkcij te spletne
                strani.
              </p>
              <p>
                V primeru prenosa osebnih podatkov v ZDA so bile z Google LLC
                sklenjene ustrezne standardne pogodbe EU (ustrezno jamstvo za
                obdelavo podatkov v neevropskih državah). Do uporabljenih
                standardnih pogodbenih klavzul EU je mogoče dostopati prek URL-a{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/SK/TXT/?uri=CELEX%3A32010D0087"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/SK/TXT/?uri=CELEX%3A32010D0087
                </a>
                .
              </p>
              <p>
                Poleg tega lahko preprečite tudi zbiranje podatkov, ki so
                ustvarjeni s piškotki, in so povezani z vašo uporabo te spletne
                strani (vključno z vašim naslovom IP), kot tudi obdelavo teh
                podatkov s strani Googla, tako da prenesete in namestite vtičnik
                brskalnika, ki je na voljo pod naslednjo povezavo.
                http://tools.google.com/dlpage/gaoptout. Vendar pa želimo
                poudariti, da v tem primeru morda ne boste mogli uporabljati
                vseh funkcij spletnega mesta v celoti. Z uporabo naše spletne
                strani se strinjate z obdelavo zbranih podatkov s strani Googla
                na zgoraj navedeni način in za zgoraj omenjeni namen.
              </p>
              <p>
                E želite več informacij o Googlovi uporabi podatkov, opt-out in
                drugih možnostih, obiščite Googlove spletne strani:
              </p>
              <p>
                <a href="https://www.google.com/intl/de/policies/privacy/partners">
                  https://www.google.com/intl/de/policies/privacy/partners
                </a>
                <br />
                <a href="https://www.google.com/policies/technologies/ads">
                  http://www.google.com/policies/technologies/ads
                </a>
                <br />
                <a href="https://www.google.de/settings/ads">
                  http://www.google.de/settings/ads
                </a>
                <br />
                <a href="https://www.google.com/ads/preferences">
                  http://www.google.com/ads/preferences
                </a>
              </p>
              <p>
                <strong>Oglaševalski partnerji</strong>
              </p>
              <p>
                Nekatere naše podružnice lahko uporabljajo piškotke in spletne
                svetilnike. Naši oglaševalski partnerji vključujejo Google
                Adsense, Skupino Reach, Adscale / Ströer, Valuebrand, spletne
                storitve Snigel, 1337 UGC GmbH in YieldLove.
              </p>
              <p>
                Ti strežniki oglasov ali oglaševalske mreže tretjih oseb
                uporabljajo tehnologijo za oglase in povezave, ki se pojavljajo
                na namigah in se pošljejo neposredno v vaš brskalnik. To
                samodejno dobi vaš naslov IP. Druge tehnologije (na primer
                piškotki, JavaScript ali spletni svetilniki) lahko uporabljajo
                tudi druga omrežja oglasov za merjenje učinkovitosti njihovega
                oglaševanja ali prilagajanje prikazane vsebine oglasa.
              </p>
              <p>
                Zbiranje in obdelava podatkov temelji na zakonitem interesu v
                skladu s členom 6 s. 1 f BDP in z zagonom obdelave podatkov s
                strani oglaševalskih partnerjev (tretjih oseb) s sklenjenim DAV
                / DPA („pogodba o obdelavi podatkov“) v skladu s čl. 28 GDPR.
                tekajev nima dostopa ali nadzora nad temi piškotki tretjih oseb.
              </p>
              <p>
                Oglejte si pravilnik o zasebnosti partnerja za podrobnosti o
                svojih postopkih in kako se odločite za določene prakse.
                Pravilnik o zasebnosti za tale ne velja za druge oglaševalce ali
                spletna mesta, zato ne moremo nadzirati njihovih dejavnosti.
              </p>
              <p>
                Če želite onemogočiti piškotke, lahko to storite prek svojih
                lastnih možnosti brskalnika. Podrobnejše informacije o
                upravljanju piškotkov najdete z določenimi spletnimi brskalniki
                na ustreznih spletnih straneh brskalnikov.
              </p>
              <p>
                <strong>
                  Tretje osebe in možnosti za odjavo za YieldLove, Snigeld Web
                  Ltd. e 1337 UGC GmbH
                </strong>
              </p>
              <p>
                SnigelWeb Ltd. uporabljamo kot tretjo osebo za zagotavljanje
                tehnologij za monetizacijo našega spletnega mesta. Njihovo
                politiko zasebnosti in piškotkov si lahko ogledate{" "}
                <a
                  href="https://www.snigel.com/privacy-policy/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  tukaj
                </a>
                .
              </p>
              <p>
                Osrednja možnost protislovja za različne tretje dobavitelje,
                zlasti v ameriških podjetjih, je dosegljiva tudi na naslednji
                povezavi: optout.networkadvertising.org. Lahko pa se tudi za
                vsako podjetje, s katerim sodelujemo, odjavite posebej. Za
                zbiranje podatkov in zagotavljanje spletnega oglaševanja na
                podlagi obresti so odgovorna naslednja podjetja v imenu
                Yieldlove GmbH, Kehrwieder 9, 20457 Hamburg e der SnigelWeb
                Ltd., The Black Church, St. Mary’s Place, D07 P4AX e 1337 UGC
                GmbH, Am Sägerhof 3, 90596 Schwanstetten:
              </p>
              <p>
                <u>4w Marketplace</u>
                <br />
                4w Marketplace (www.4wmarketplace.com) uses technologies, to
                show interest-based advertising to you. Provider of 4w
                Marketplace is 4w Marketplace srl located in Fisciano (Salerno)
                – 84084 in Via Giovanni Paolo II n.100. In case you would like
                to prevent 4w Marketplace from gathering anonymised data you can
                do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.4wmarketplace.com/privacy/">
                  http://www.4wmarketplace.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://www.youronlinechoices.com/it/le-tue-scelte">
                  http://www.youronlinechoices.com/it/le-tue-scelte
                </a>
              </p>
              <p>
                <u>Adform</u>
                <br />
                Adform (www.adform.com) uses technologies, to show
                interest-based advertising to you. Provider of Adform is Adform
                located in Wildersgade 10B, 1, 1408 Copenhagen, Denmark. In case
                you would like to prevent Adform from gathering anonymised data
                you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://site.adform.com/privacy-policy-opt-out/">
                  https://site.adform.com/privacy-policy-opt-out/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://site.adform.com/privacy-policy-opt-out/">
                  https://site.adform.com/privacy-policy-opt-out/
                </a>
              </p>
              <p>
                <u>Amazon</u>
                <br />
                Amazon (https://www.aps.amazon.com) uses technologies, to show
                interest-based advertising to you. Provider of Amazon publisher
                services is Amazon publisher services located in Washington –
                410 Terry Ave. North, Seattle, WA 98109-5210. In case you would
                like to prevent Amazon publisher services from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_sib?ie=UTF8&amp;nodeId=468496">
                  https://www.amazon.com/gp/help/customer/display.html/ref=hp_left_sib?ie=UTF8&amp;nodeId=468496
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.amazon.com/adprefs/ref=hp_468496_advertisingpref2">
                  https://www.amazon.com/adprefs/ref=hp_468496_advertisingpref2
                </a>
              </p>
              <p>
                <u>AppNexus</u>
                <br />
                AppNexus (https://www.appnexus.com) uses technologies, to show
                interest-based advertising to you. Provider of AppNexus is
                AppNexus Group located in in New York – 28 W. 23rd Street, New
                York, New York, 10010. In case you would like to prevent
                Appnexus from gathering anonymised data you can do so by using
                the opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:
                https://www.appnexus.com/en/company/privacy-policy
              </p>
              <p>
                Opt-out:
                https://www.appnexus.com/en/company/platform-privacy-policy#choices
              </p>
              <p>
                <u>Conversant</u>
                <br />
                Conversant (https://www.conversantmedia.com) uses technologies,
                to show interest-based advertising to you. Provider of
                Conversant is Conversant inc. located in in Chicago (IL) – 101
                North Wacker, 23rd Floor Chicago, IL 60606. In case you would
                like to prevent Conversant from gathering anonymised data you
                can do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.conversantmedia.com/legal/privacy">
                  http://www.conversantmedia.com/legal/privacy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.conversantmedia.com/">
                  http://optout.conversantmedia.com/
                </a>
              </p>
              <p>
                <u>Criteo</u>
                <br />
                Criteo (https://www.criteo.com) uses technologies, to show
                interest-based advertising to you. Provider of Criteo is Criteo
                located in Paris – 32 Rue Blanche – 75009 Paris – France. In
                case you would like to prevent Criteo from gathering anonymised
                data you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.criteo.com/privacy/">
                  http://www.criteo.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.criteo.com/privacy/">
                  https://www.criteo.com/privacy/
                </a>
              </p>
              <p>
                <u>District M</u>
                <br />
                District M (https://districtm.net) uses technologies, to show
                interest-based advertising to you. Provider of District M is
                District M located in Montreal – 5455 Gaspe Ave #730, Montreal,
                QC H2T 3B3, Canada. In case you would like to prevent District M
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://districtm.net/en/page/platforms-data-and-privacy-policy/">
                  https://districtm.net/en/page/platforms-data-and-privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://cdn.districtm.ca/optout.html">
                  https://cdn.districtm.ca/optout.html
                </a>
              </p>
              <p>
                <u>Doubleclick</u>
                <br />
                Doubleclick (www.doubleclickbygoogle.com) uses technologies, to
                show interest-based advertising to you. Provider of Doubleclick
                is Google located in Ireland Limited, Gordon House, Barrow St
                Dublin 4 Ireland. In case you would like to prevent Doubleclick
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.google.com/intl/en/policies/privacy/">
                  http://www.google.com/intl/en/policies/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://adssettings.google.com/authenticated?hl=en">
                  https://adssettings.google.com/authenticated?hl=en
                </a>
              </p>
              <p>
                <u>Facebook</u>
                <br />
                Facebook (www.facebook.com) uses technologies, to show
                interest-based advertising to you. Provider of Facebook is
                Facebook Inc., located in 1601 S. California Ave, Palo Alto, CA
                94304, USA. In case you would like to prevent Facebook from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.facebook.com/full_data_use_policy">
                  www.facebook.com/full_data_use_policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.facebook.com/ads/preferences">
                  www.facebook.com/ads/preferences
                </a>
              </p>
              <p>
                <u>Indexexchange</u>
                <br />
                Indexexchange (www.indexexchange.com) uses technologies, to show
                interest-based advertising to you. Provider of Indexexchange is
                Indexexchange located in New York – 20 W 22nd St. Suite 1101,
                New York, NY 10010. In case you would like to prevent
                Indexexchange from gathering anonymised data you can do so by
                using the opt-out link below. This Opt-out cookie deletes all
                gathered information until now and prevents it from collecting
                any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.indexexchange.com/privacy/">
                  http://www.indexexchange.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.networkadvertising.org/?c=1#!/">
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </p>
              <p>
                <u>Media.net</u>
                <br />
                Media.net (http://www.media.net/privacy-policy) uses
                technologies, to show interest-based advertising to you.
                Provider of Media.net is Media.net Advertising Ltd. located in
                Dubai – 107/108, DIC Building 5, Dubai Internet City, Dubai,
                215028, United Arab Emirates. In case you would like to prevent
                Media.net from gathering anonymised data you can do so by using
                the opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.media.net/privacy-policy">
                  http://www.media.net/privacy-policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.networkadvertising.org/choices/">
                  http://www.networkadvertising.org/choices/
                </a>
              </p>
              <p>
                <u>Oath</u>
                <br />
                Oath (https://www.oath.com/) uses technologies, to show
                interest-based advertising to you. Provider of Oath is Oath
                (EMEA) Limited located in Dublin – 5-7 Point Square, North Wall
                Quay. In case you would like to prevent Oath from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://privacy.aol.com/">http://privacy.aol.com/</a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://aim.yahoo.com/aim/ie/en/optout/">
                  https://aim.yahoo.com/aim/ie/en/optout/
                </a>
              </p>
              <p>
                <u>OpenX</u>
                <br />
                OpenX (https://www.OpenX.com) uses technologies, to show
                interest-based advertising to you. Provider of OpenX is OpenX
                located in Pasadena – 888 E Walnut St, 2nd Floor, Pasadena CA,
                91101, USA. In case you would like to prevent OpenX from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.openx.com/de_de/privacy-policy/">
                  https://www.openx.com/de_de/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.openx.com/legal/interest-based-advertising/">
                  https://www.openx.com/legal/interest-based-advertising/
                </a>
              </p>
              <p>
                <u>Pubmatic</u>
                <br />
                Pubmatic (https://www.pubmatic.com) uses technologies, to show
                interest-based advertising to you. Provider of Pubmatic is
                Pubmatic, Inc. located in Redwood City – 305 Main Street, First
                Floor, Redwood City, California 94063, USA. In case you would
                like to prevent Pubmatic from gathering anonymised data you can
                do so by using the opt-out link below. This Opt-out cookie
                deletes all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.openx.com/de_de/privacy-policy/">
                  https://www.openx.com/de_de/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://pubmatic.com/legal/opt-out/">
                  https://pubmatic.com/legal/opt-out/
                </a>
              </p>
              <p>
                <u>Pulsepoint</u>
                <br />
                Pulsepoint (https://www.pulsepoint.com) uses technologies, to
                show interest-based advertising to you. Provider of Pulsepoint
                is Pulsepoint, Inc. located in New York – 360 Madison Avenue,
                14th Floor, New York, NY 10017. In case you would like to
                prevent Pulsepoint from gathering anonymised data you can do so
                by using the opt-out link below. This Opt-out cookie deletes all
                gathered information until now and prevents it from collecting
                any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.pulsepoint.com/privacy-policy">
                  https://www.pulsepoint.com/privacy-policy
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://optout.networkadvertising.org/?c=1#!/">
                  http://optout.networkadvertising.org/?c=1#!/
                </a>
              </p>
              <p>
                <u>Reachnet</u>
                <br />
                Reachnet (https://www.reachnet.de) uses technologies, to show
                interest-based advertising to you. Provider of Reachnet is
                Reachnet DE Ltd. located in Hamburg – Grindelallee 41, D-20146
                Hamburg. In case you would like to prevent Reachnet from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.reachnet.de/unternehmen/agb.html">
                  http://www.reachnet.de/unternehmen/agb.html
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://adfarm1.adition.com/opt?m=optout&amp;n=73">
                  https://adfarm1.adition.com/opt?m=optout&amp;n=73
                </a>
              </p>
              <p>
                <u>Rubicon Project</u>
                <br />
                Rubicon Project (https://www.rubiconproject.com) uses
                technologies, to show interest-based advertising to you.
                Provider of Rubicon Project is Rubicon Project, inc. located in
                Playa Vista – 12181 Bluff Creek Drive, 4th Floor, Playa Vista,
                CA 90094, USA. In case you would like to prevent Rubicon Project
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.rubiconproject.com/privacy-policy/">
                  http://www.rubiconproject.com/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://rubiconproject.com/privacy/consumer-online-profile-and-opt-out/">
                  https://rubiconproject.com/privacy/consumer-online-profile-and-opt-out/
                </a>
              </p>
              <p>
                <u>Primis</u>
                <br />
                Primis (https://www.primis.tech) uses technologies, to show
                interest-based advertising to you. Provider of Primis is Primis
                LTD located in 622 Third avenue, McCann New York House 10017 New
                York City, USA. In case you would like to prevent Primis from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf">
                  https://www.primis.tech/wp-content/uploads/2018/02/primisPrivacyPolicy2018.pdf
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://web.archive.org/web/20180116234711/http:/live.sekindo.com/utils/cookieOptOut.php">
                  https://web.archive.org/web/20180116234711/http:/live.sekindo.com/utils/cookieOptOut.php
                </a>
              </p>
              <p>
                <u>Smaato</u>
                <br />
                Smaato (https://www.smaato.com) uses technologies, to show
                interest-based advertising to you. Provider of Smaato is Smaato
                Ad Services located in Hamburg – Valentinskamp 70, Emporio,
                20355 Hamburg, Germany. In case you would like to prevent Smaato
                from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.smaato.com/privacy/">
                  https://www.smaato.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.youronlinechoices.eu/">
                  http://www.youronlinechoices.eu
                </a>
              </p>
              <p>
                <u>SmartAdserver</u>
                <br />
                SmartAdserver (https://www.smartadserver.com) uses technologies,
                to show interest-based advertising to you. Provider of
                SmartAdserver is SmartAdserver located in Paris – 66 Rue de la
                Chaussée d´Antin, 75009 Paris, France. In case you would like to
                prevent SmartAdserver from gathering anonymised data you can do
                so by using the opt-out link below. This Opt-out cookie deletes
                all gathered information until now and prevents it from
                collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://smartadserver.com/company/privacy-policy/">
                  http://smartadserver.com/company/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.smartadserver.com/diffx/optout/IABOptout.aspx">
                  http://www.smartadserver.com/diffx/optout/IABOptout.aspx
                </a>
              </p>
              <p>
                <u>Sovrn</u>
                <br />
                Sovrn (https://www.sovrn.com) uses technologies, to show
                interest-based advertising to you. Provider of Sovrn is Sovrn
                Holdings, Inc. located in Boulder – 5541 Central Avenue,
                Boulder, CO 80301. In case you would like to prevent Sovrn from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.sovrn.com/privacy-policy-eu/">
                  https://www.sovrn.com/privacy-policy-eu/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://info.evidon.com/pub_info/15620?v=1&amp;nt=0&amp;nw=false">
                  https://info.evidon.com/pub_info/15620?v=1&amp;nt=0&amp;nw=false
                </a>
              </p>
              <p>
                <u>Ströer SSP</u>
                <br />
                Ströer SSP (https://www.adscale.de) uses technologies, to show
                interest-based advertising to you. Provider of Ströer SSP is
                Ströer media Deutschland GmbH located in Köln – 50999 Köln,
                Ströer-Allee 1. In case you would like to prevent Adscale from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.adscale.de/datenschutz">
                  http://www.adscale.de/datenschutz
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://ih.adscale.de/adscale-ih/oo">
                  ih.adscale.de/adscale-ih/oo
                </a>
              </p>
              <p>
                <u>Twiago</u>
                <br />
                Twiago (https://www.twiago.com) uses technologies, to show
                interest-based advertising to you. Provider of Twiago is Twiago
                located in Köln – Gustav-Heinemann-Ufer 72b, 50968 Köln. In case
                you would like to prevent Twiago from gathering anonymised data
                you can do so by using the opt-out link below. This Opt-out
                cookie deletes all gathered information until now and prevents
                it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://www.twiago.com/datenschutz/">
                  http://www.twiago.com/datenschutz/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://control.twiago.com/privacy.php?lang=0">
                  http://control.twiago.com/privacy.php?lang=0
                </a>
              </p>
              <p>
                <u>Mopub</u>
                <br />
                Mopub (https://www.mopub.com) uses technologies, to show
                interest-based advertising to you. Provider of Mopub is Twitter,
                Inc. located in San Francisco – 1355 Market Street, Suite 900,
                San Francisco, Ca 94103. In case you would like to prevent
                Moppub from gathering anonymised data you can do so by using the
                opt-out link below. This Opt-out cookie deletes all gathered
                information until now and prevents it from collecting any
                information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.mopub.com/legal/privacy/">
                  https://www.mopub.com/legal/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.mopub.com/legal/privacy/">
                  https://www.mopub.com/legal/privacy/
                </a>
              </p>
              <p>
                <u>Inmobi</u>
                <br />
                Inmobi (https://www.inmobi.com) uses technologies, to show
                interest-based advertising to you. Provider of Inmobi is Inmobi
                Pte Ltd located in Bangalore – Embassy Tech Square,
                Kadubeesanahalli Village Outer Ring Road, Varthur Hobli,
                Bangalore 560103. In case you would like to prevent Inmobi from
                gathering anonymised data you can do so by using the opt-out
                link below. This Opt-out cookie deletes all gathered information
                until now and prevents it from collecting any information in the
                future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="https://www.inmobi.com/privacy-policy/">
                  https://www.inmobi.com/privacy-policy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="https://www.inmobi.com/page/opt-out/">
                  https://www.inmobi.com/page/opt-out/
                </a>
              </p>
              <p>
                <u>Connectad</u>
                <br />
                Connectad (www.connectad.io) uses technologies, to show
                interest-based advertising to you. Provider of Connectad is
                Connectad located in Margaretenstrasse 87/11, Vienna, Austria.
                In case you would like to prevent Connectad from gathering
                anonymised data you can do so by using the opt-out link below.
                This Opt-out cookie deletes all gathered information until now
                and prevents it from collecting any information in the future.
              </p>
              <p>
                Privacy policy:{" "}
                <a href="http://connectadrealtime.com/privacy/">
                  http://connectadrealtime.com/privacy/
                </a>
              </p>
              <p>
                Opt-out:{" "}
                <a href="http://sync-eu.connectad.io/sync/dnt?__hstc=266841809.0a81b953556ce3558cb1f0af90aa4740.1527162622466.1527162622466.1527162622466.1&amp;__hssc=266841809.2.1527162622467&amp;__hsfp=1834479749">
                  http://sync-eu.connectad.io
                </a>
              </p>
              <p>DRUGI / NEPOREDANI PIŠKOTKI</p>
              <p>
                Zaradi načina delovanja interneta in spletnih strani je možno,
                da ne bomo vedno imeli nadzora nad piškotki, ki jih prek naših
                pasic dajo tretje osebe. To še posebej velja, kadar naši
                transparenti vsebujejo vdelane elemente, kot so besedila,
                dokumenti, slike ali filmski posnetki, ki jih shrani druga
                stranka, vendar so prikazani na naših pasicah ali v njih.
              </p>
              <p>
                Če na tej spletni strani naletite na piškotke, ki spadajo v to
                kategorijo, ki je zgoraj nismo omenili, nas obvestite ali se
                obrnite neposredno na tretjo osebo in vprašajte, katere piškotke
                so postavili, kakšen je razlog za to, kakšna je življenjska doba
                piškotka in na kakšen način so zaščitili vašo zasebnost.
              </p>
              <p>VAŠE PRAVICE GLEDE NA VAŠE PODATKE</p>
              <p>
                Podjetje Yieldlove podatkov o oglaševalskih pasicah, ki jih
                uporablja, ne obravnava kot osebne podatke v skladu z veljavno
                zakonodajo. Prav tako ne zbiramo ali obdelujemo občutljivih
                osebnih podatkov, kot so podatki o rasni ali etnični
                pripadnosti, političnih mnenjih, verskih ali filozofskih
                prepričanjih, članstvu v sindikatih, zdravju ali spolnem
                življenju. Prav tako zavestno ne zbiramo podatkov otrok, mlajših
                od 12 let.
              </p>
              <p>
                <strong>Uporaba storitve Google AdSense / Doubleclick</strong>
              </p>
              <p>
                tellows uporablja Google Adsense, oglasno storitev podjetja
                Google Inc., Mountain View, ZDA (»Google«). Google Adsense
                uporablja „piškotke“, ki jih vaš brskalnik (npr. Majhne
                besedilne datoteke) hrani v računalniku in ki omogočajo analizo
                vaše uporabe te spletne strani. Google Adsense uporablja tudi
                tako imenovane „spletne svetilnike“ (majhne nevidne slike) za
                zbiranje informacij. Z uporabo spletnih svetilnikov se lahko
                zabeležijo in zbirajo preprosti ukrepi, kot je obiskovanje
                prometa na spletnem mestu. Informacije o vaši uporabi spletnega
                mesta, ustvarjenega s piškotki in / ali spletnimi svetilniki
                (vključno z vašim naslovom IP), bodo poslane na Googlov strežnik
                v Združenih državah Amerike in bodo tam shranjene. V brskalniku
                lahko preprečite shranjevanje piškotkov.
              </p>
              <p>
                V primeru prenosa osebnih podatkov v ZDA so bile z Google LLC
                sklenjene ustrezne standardne pogodbe EU (ustrezno jamstvo za
                obdelavo podatkov v neevropskih državah). Do uporabljenih
                standardnih pogodbenih klavzul EU je mogoče dostopati prek URL-a{" "}
                <a
                  href="https://eur-lex.europa.eu/legal-content/SK/TXT/?uri=CELEX%3A32010D0087"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://eur-lex.europa.eu/legal-content/SK/TXT/?uri=CELEX%3A32010D0087
                </a>
                .
              </p>
              <p>
                Podatke, ki jih zbere Google, lahko soglaša s tretjimi strankami
                po pogodbi ali po zakonu, ki ga opravi Google. Google vašega
                IP-naslova ne bo povezal z drugimi podatki, ki ste jih shranili.
              </p>
              <p>
                Z ustreznimi nastavitvami v spletnem brskalniku lahko preprečite
                shranjevanje omenjenih piškotkov v računalnik. Vendar pa obstaja
                možnost, da vsebine te spletne strani ni več mogoče uporabljati
                v enakem obsegu. Z uporabo te strani soglašate z obdelavo
                osebnih podatkov s strani Googla na način in za namene, navedene
                zgoraj.
              </p>
              <p>
                Več informacij o pravilniku o zasebnosti programa Google AdSense
                najdete tukaj
              </p>
              <p>
                Tukaj lahko onemogočite Googe AdSense piškotke:{" "}
                <a href="https://www.google.com/settings/ads/anonymous">
                  https://www.google.com/settings/ads/anonymous
                </a>{" "}
                in{" "}
                <a href="https://www.google.com/policies/technologies/ads/">
                  https://www.google.com/policies/technologies/ads/
                </a>
              </p>
              <p>
                <strong>Uporaba Facebook-Plugin</strong>
              </p>
              <p>
                Na teh spletnih straneh se uporabljajo vtičniki socialnega
                omrežja facebook.com, ki jih upravlja Facebook Inc., 1601 S.
                California Ave, Palo Alto, CA 94304, ZDA („Facebook“). Če
                spletno stran naše spletne prisotnosti odprete s takim
                vtičnikom, je vzpostavljena povezava s strežniki Facebook in
                vtičnik se prikaže prek sporočila v brskalnik. S tem se na
                Facebook strežniku signalizira, katere spletne strani ste
                obiskali. Če ste takrat prijavljeni kot član Facebooka, bo
                Facebook te informacije dodelil vašemu uporabniškemu računu
                Facebook. Z uporabo funkcij vtičnika (npr. Kliknite na „podobne“
                tipke, pisanje komentarjev), so ti podatki pripisani tudi vašemu
                uporabniškemu računu Facebook, ki ga lahko preprečite samo z
                odjavo pred uporabo vtičnikov.
              </p>
              <p>
                Če niste član Facebooka, še vedno obstaja možnost, da bo
                Facebook odkril in shranil vaš naslov IP. V Nemčiji je po
                podatkih družbe Facebook shranjen samo anonimni naslov IP.
                Dodatne informacije o zbiranju in uporabi podatkov prek
                Facebooka in njihovih pravic ter možnosti za zaščito vaše
                zasebnosti najdete v razdelku o zasebnosti na Facebooku.
              </p>
              <p>
                <strong>
                  Pixel sledenja konverzijam za Facebook in Facebook Custom
                  Audience
                </strong>
              </p>
              <p>
                Z vašim dovoljenjem, namesto testov uporabljajo „pixel sledenja
                preusmeritvam“ Facebook Inc., 1601 S. California Ave, Palo Alto,
                CA 94304, USA (Facebook). S tem orodjem lahko sledimo
                dejavnostim uporabnikov, ko vidijo ali kliknejo oglas na
                Facebooku. Zato lahko snemamo učinkovitost oglasov Facebook za
                statistične in tržne raziskave. Zbrani podatki so anonimni, kar
                pomeni, da ne moremo videti osebnih podatkov uporabnika. Na naše
                znanje in vaše podatke bo Facebook shranil in obdelal te
                podatke.
              </p>
              <p>
                Facebook te podatke lahko povežete s svojim Facebook računom in
                ga uporabite za svoje oglase v skladu z lastno politiko
                zasebnosti, ki jo najdete pod
                https://www.facebook.com/about/privacy/. Za Facebook in njegove
                partnerje lahko dovolite uporabo oglaševanja na Facebooku in
                zunaj njega. Shranjevanje piškotka na vašem računalniku za te
                namene je možno. To dovoljenje lahko prijavijo samo uporabniki,
                starejši od 13 let. Če ste mlajši, prosimo, prosite svojega
                zakonitega skrbnika.
              </p>
              <p>
                Uporabniki Facebook bi morali opozoriti, da nam sporočila
                uporabljajo komunikacijsko orodje za spletno stran po meri. V ta
                namen so v naše spletne strani vgrajene tako imenovane »piksli«.
                Če ste uporabnik Facebooka, lahko Facebook tako vašemu obisku
                straneh spletnega mesta dodeli svoj Facebook uporabniški račun.
                Poleg tega Facebook lahko kasneje ugotovi, ali je bil določen
                Facebook oglas uspešen. Tudi Facebook pixel nam omogoča, da prek
                Facebooka distribuira oglase določenim prejemnikom. V ta namen
                izključno prejemamo statistične podatke od Facebooka, ki niso
                povezani z dejanskimi osebami. Namen tega ukrepa je optimizirati
                našo spletno stran v smislu oglaševanja, tržnih raziskav in
                oblikovanja povpraševanja. Dejavnosti sledenja na podlagi
                pikslov se izvajajo na način, ki nam ne omogoča, da vas osebno
                identificiramo in samo označujemo uporabnike kot obiskovalce
                našega spletnega mesta v anonimni obliki za nas.
              </p>
              <p>
                Za več informacij o namenu in obsegu zbiranja podatkov ter
                nadaljnji obdelavi in uporabi podatkov s strani Facebooka ter
                možnosti, ki jih potrebujete za zaščito vaše zasebnosti, si
                oglejte pravilnik o zasebnosti za Facebook, ki ga najdete na
                https: // www.facebook.com/privacy/explanation. Pravica do
                preklica: Ugovori proti uporabi Facebook Spletne ciljne publike
                so na voljo na
                https://www.facebook.com/ads/website_custom_audiences. Za to
                morate biti prijavljeni v Facebook.
              </p>
              <p>
                <strong>Google Fonts</strong>
              </p>
              <p>
                Vključujemo pisave („Google Fonts“), ki jih ponuja Google LLC,
                1600 Amphitheater Parkway, Mountain View, CA 94043, ZDA, da
                optimizirate stopnje nalaganja spletne strani. Vključevanje teh
                spletnih pisav opravi strežniški klic, ponavadi strežnik Google
                v ZDA. Spletne strani, ki ste jih obiskali, bodo prenesene na
                strežnik. Tudi naslov IP brskalnika, ki ga je obiskovalec tega
                spletnega mesta uporabljal, shrani Google. Pravilnik o
                zasebnosti je na voljo na naslovu:{" "}
                <a href="https://www.google.com/policies/privacy/">
                  https://www.google.com/policies/privacy/
                </a>{" "}
                in opt-out na naslovu:{" "}
                <a href="https://adssettings.google.com/authenticated">
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
              <p>
                <strong>Google Knjižnica za Ajax in jQuery</strong>
              </p>
              <p>
                Za optimalno hitrost nalaganja spletne strani uporabljamo Ajax
                in knjižnico JavaScript jQueryja. V tem primeru se knjižnice
                programov pridobijo s strežnikov podjetja Google LLC, 1600
                Amphitheater Parkway, Mountain View, CA 94043, ZDA (Google),
                posebej Google CDN. Če ste že uporabljali jQuery na drugi strani
                Google CDN, bo vaš brskalnik uporabil predpomnjeno kopijo. V
                nasprotnem primeru bodo prenesene potrebne informacije. Pri tem
                bo obiskano spletno mesto poslano Googlovemu strežniku. Google
                tudi shrani IP-naslov vaše naprave. Več informacij najdete na
                naslovu https://cloud.google.com/cdn/?hl=sl in{" "}
                <a href="https://www.google.com/policies/privacy/?hl=sl">
                  https://www.google.com/policies/privacy/?hl=sl
                </a>
                . Če želite preprečiti izvajanje JavaScripta, lahko namestite
                blokator JavaScript.
              </p>
              <p>
                <strong>Google reCAPTCHA</strong>
              </p>
              <p>
                Na naših spletnih mestih uporabljamo storitev „Google reCAPTCHA“
                (v nadaljevanju „reCAPTCHA“). Ponudnik je Google Inc., 1600
                Amphitheatre Parkway, Mountain View, CA 94043, USA („Google“). S
                storitvijo reCAPTCHA se preveri, ali je podatke, vnesene na
                našem spletnem mestu (npr. v kontaktnem obrazcu), navedel človek
                ali avtomatiziran program. V ta namen reCAPTCHA analizira
                vedenje uporabnika spletnega mesta na podlagi različnih
                značilnosti. Ta analiza se začne samodejno, takoj ko obiskovalec
                spletnega mesta odpre spletno mesto. Za analizo reCAPTCHA
                ovrednoti različne informacije (npr. naslov IP, trajanje obiska
                obiskovalca spletnega mesta na spletnem mestu ali premike miške,
                ki jih naredi uporabnik). Podatki, zbrani pri analizi, se
                posredujejo Googlu.
              </p>
              <p>
                Analize reCAPTCHA potekajo popolnoma v ozadju. Obiskovalci
                spletnega mesta niso opozorjeni, da analiza poteka.
                <br />
                Obdelava podatkov poteka na podlagi člena 6, odstavka 1, točke f
                SUVP. Upravljavec spletnega mesta ima zakonit interes, da
                zaščiti svojo spletno ponudbo pred nedovoljenim avtomatiziranim
                poizvedovanjem in pred neželeno elektronsko pošto.
              </p>
              <p>
                Nadaljnje informacije o storitvi Google reCAPTCHA ter Googlovi
                izjavi o varstvu podatkov dobite na naslednji povezavi:
                <br />
                <a
                  href="https://policies.google.com/privacy?hl=sl"
                  rel="nofollow"
                  target="_blank"
                >
                  https://policies.google.com/privacy?hl=sl
                </a>{" "}
                and{" "}
                <a
                  href="https://www.google.com/recaptcha/intro/android.html"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  https://www.google.com/recaptcha/intro/android.html
                </a>
              </p>
              <p>
                <strong>Google Maps</strong>
              </p>
              <p>
                Za ponazoritev lokacije naslovov uporabljamo storitev Google
                Zemljevidov, ki jo ponuja Google LLC, 1600 Amphitheater Parkway,
                Mountain View, CA 94043, ZDA. Pravilnik o zasebnosti je na voljo
                na naslovu:{" "}
                <a href="https://www.google.com/policies/privacy/">
                  https://www.google.com/policies/privacy/
                </a>{" "}
                in opt-out na naslovu:{" "}
                <a href="https://adssettings.google.com/authenticated">
                  https://adssettings.google.com/authenticated
                </a>
                .
              </p>
              <p>
                Informacije o vaši uporabi našega spletnega mesta (na primer vaš
                naslov IP) se prenesejo na Googlove strežnike v ZDA in tam
                shranijo, ko prikličete tiste podstrani, v katere je vgrajen
                zemljevid Google Maps. To se zgodi ne glede na to, ali Google
                ponuja uporabniški račun, prek katerega ste prijavljeni, ali ne
                obstaja noben uporabniški račun. Če ste prijavljeni v Google,
                bodo vaši podatki neposredno dodeljeni vašemu računu. Če ne
                želite, da so vaši podatki povezani z vašim Google profilom, se
                morate odjaviti iz Google uporabniškega računa. Google vaše
                podatke (tudi za uporabnike, ki niso prijavljeni) shrani kot
                profile uporabe in jih oceni. Imate pravico ugovarjati
                ustvarjanju teh uporabniških profilov in za uveljavljanje te
                pravice se morate obrniti na Google.
              </p>
              <p>
                Google Ireland Limited zagotavlja skladnost s stopnjo varstva
                podatkov, ki velja v EU, s sprejemom in strinjanjem s tako
                imenovanimi standardnimi pogodbenimi klavzulami EU o varstvu
                podatkov.
              </p>
              <p>
                Če se ne strinjate s prihodnjim prenosom vaših podatkov Googlu v
                okviru uporabe Google Zemljevidov, imate tudi možnost popolne
                deaktiviranja spletne storitve Google Zemljevidi z izklopom
                aplikacije JavaScript v brskalniku. Google Maps in s tem tudi
                prikaz zemljevida na tej spletni strani potem ni več mogoče
                uporabiti.
              </p>
              <p>
                Ti postopki obdelave se izvajajo le, če je izrecno soglasje dano
                v skladu s čl. 6 Odstavek 1 lit. GDPR.
              </p>
              <p>
                <strong>OpenStreetMap</strong>
              </p>
              <p>
                To spletno mesto uporablja odprtokodno orodje za preslikavo
                „OpenStreetMap“ (OSM) prek API-ja. Ponudnik je OpenStreetMap
                Foundation. Za uporabo funkcij OpenStreetMap morate shraniti
                svoj naslov IP. Te informacije se običajno posredujejo strežniku
                OpenStreetMap in tam shranijo. Ponudnik tega spletnega mesta
                nima vpliva na prenos podatkov.
              </p>
              <p>
                Uporaba OpenStreetMap je v interesu privlačne predstavitve naših
                spletnih ponudb in enostavne lokacije krajev, ki smo jih
                označili na spletnem mestu. To predstavlja legitimni interes v
                smislu čl. 6 Odstavek 1 lit. f GDPR.
              </p>
              <p>
                Z uporabo našega spletnega mesta soglašate z obdelavo podatkov s
                strani OpenStreetMap. Izvajanje obdelave podatkov s pomočjo
                OpenStreetMap lahko preprečite tako, da v svojem brskalniku
                deaktivirate Javascript. Vendar bo to preprečilo prikaz pogleda
                zemljevida OpenStreetMap.
                <br />
                Več informacij o ravnanju z uporabniškimi podatki najdete na{" "}
                <a
                  href="https://wiki.openstreetmap.org/wiki/Legal_FAQ"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  privacy page
                </a>{" "}
                o zasebnosti OpenStreetMap in tukaj{" "}
                <a
                  href="https://wiki.openstreetmap.org/wiki/Legal_FAQ"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  http://wiki.openstreetmap.org/wiki/Legal_FAQ
                </a>
                .
              </p>
              <p>
                <strong>
                  {" "}
                  ShareThis Social Media Buttons on the tellows blog
                </strong>
              </p>
              <p>
                V našem blogu uporabljamo storitev ShareThis za zagotavljanje
                orodij za izmenjavo v družabnih omrežjih. ShareThis zbira
                informacije s pomočjo tehničnih piškotkov, nameščenih v vašem
                brskalniku, pikselnih oznak, naslovov HTTP (ali drugih
                komunikacijskih protokolov) in identifikatorjev brskalnika. Za
                izogibanje odločitvam o zavrnitvi uporabnika se ne uporabljajo
                flash piškotki ali drugi lokalno shranjeni predmeti (LSO).
                ShareThis zbira podatke o registraciji in podatke o uporabi.
                Podatki o uporabi zbirajo in uporabljajo tehnične podatke, ki se
                nanašajo na nekaj brskanja, za prikaz prilagojenih oglasov,
                zagotavljanje analitike in modeliranje podatkov na podlagi
                skupne rabe v družabnih omrežjih.
              </p>
              <p>
                ShareThis v nobenem trenutku ne zbira kontaktnih podatkov, kot
                so vaše ime, naslov, telefonska številka, naslov, podatki o
                kreditni kartici ali kar koli drugega, kar lahko nam ali našim
                strankam omogoči neposreden stik z vami. ShareThis deli podatke
                o uporabi, vključno s segmenti občinstva, z oglaševalci,
                založniki in drugimi podatkovnimi partnerji (vsi, »Naše
                stranke«) za oglaševanje, analitiko in modeliranje podatkov na
                podlagi zanimanja.
              </p>
              <p>
                Piškotki, uporabljeni v povezavi z ShareThis, imajo obdobje
                hrambe do 9 mesecev.
                <br />
                Za več informacij o ravnanju z uporabniškimi podatki si oglejte
                pravilnik o zasebnosti ShareThis na{" "}
                <a
                  href="https://SHARETHIS.COM/PRIVACY/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  HTTPS://SHARETHIS.COM/PRIVACY/
                </a>
                .
              </p>
              <p>
                <strong>SSL šifriranje</strong>
              </p>
              <p>
                tezi za varnost uporabljajo SSL šifriranje in zaščito prenosa
                občutljive vsebine, kot so zahteve, ki jih pošljete operaterju
                spletnega mesta. Šifrirano povezavo lahko prepoznaš tako, da
                spremenite naslovno vrstico brskalnika iz »http: //« v »https:
                //« in simbola za zaklepanje v vrstici brskalnika.
              </p>
              <p>
                Če je šifriranje SSL omogočeno, podatkov, ki nam jih pošljete,
                ne morejo brati tretje osebe.
              </p>
              <p>
                <strong>Prijava OpenID</strong>
              </p>
              <p>
                Za sodelovanje na forumu za testiranje ni potrebna registracija.
                Komentarji se lahko predložijo kot registrirani ali
                neregistrirani uporabnik. Za registracijo lahko uporabite
                storitev OpenID. S tem je obstoječi račun druge storitve (npr.
                Google) povezan s spletno stranjo s pomočjo sistema za
                preverjanje pristnosti. Na spletnem mestu tellows ni ustvarjen
                ločen račun. Povezovanje računa prek OpenID-a omogoča dodatne
                možnosti za komentarje in nastavitve računa pri izgovorih.
                Uporabniki OpenID so registrirani z e-poštnim naslovom
                povezanega računa. E-poštni naslov mora biti vedno dostopen
                uporabniku, da se lahko obrne na morebitne poizvedbe pri
                izgovorih. Uporaba neveljavnega e-poštnega naslova ni dovoljena.
              </p>
              <p>
                Podatki, vneseni med registracijo, bodo uporabljeni za namene
                uporabe spletne strani. Uporabniki so lahko obveščeni po
                elektronski pošti o informacijah, povezanih s spletnimi stranmi
                ali registracijo, kot so spremembe v obsegu ponudbe ali
                tehničnih okoliščin. Skladiščenje temelji na naših legitimnih
                interesih, kot tudi zaščiti uporabnika pred zlorabo in drugo
                nepooblaščeno uporabo.
              </p>
              <p>
                <strong>V družabnih omrežjih</strong>
              </p>
              <p>
                Za komunikacijo z vami na družbenih omrežjih in obveščanje o
                naših storitvah smo tam zastopani z lastnimi stranmi. Če
                obiščete katero od naših strani v družabnih omrežjih, smo skupaj
                odgovorni s ponudnikom zadevne platforme za družbena omrežja v
                smislu člena. 26 GDPR v zvezi s sproženimi postopki obdelave, ki
                zadevajo osebne podatke.
              </p>
              <p>
                Nismo prvotni ponudnik teh strani, ampak jih le uporabljamo v
                okviru možnosti, ki nam jih ponujajo posamezni ponudniki.
                <br />
                Zato preventivno poudarjamo, da se vaši podatki lahko obdelujejo
                tudi zunaj Evropske unije ali Evropskega gospodarskega prostora.
                Uporaba zato lahko pomeni tveganje za zaščito podatkov za vas,
                saj je morda težje zaščititi vaše pravice, npr. do informacij,
                brisanje, ugovor itd., obdelava v družbenih omrežjih pa pogosto
                poteka neposredno v oglaševalske namene ali za analizo vedenja
                uporabnikov s strani ponudnikov, ne da bi na to lahko vplivali
                mi. Če ponudnik ustvari profile uporabe, se pogosto uporabljajo
                piškotki ali vedenje uporabe neposredno dodeli vašemu lastnemu
                profilu člana v družabnih omrežjih (če ste prijavljeni tukaj).
              </p>
              <p>
                Opisana obdelava osebnih podatkov se izvaja v skladu s čl. 6
                Odstavek 1 lit. f GDPR na podlagi našega zakonitega interesa in
                legitimnega interesa zadevnega ponudnika, da bomo lahko
                pravočasno komunicirali z vami ali vas obvestili o naših
                storitvah. Če morate dati soglasje za obdelavo podatkov kot
                uporabnik pri posameznih ponudnikih, se pravna podlaga sklicuje
                na čl. 6 (1) lit. GDPR v povezavi s čl. 7 GDPR.
              </p>
              <p>
                Ker nimamo dostopa do baz podatkov ponudnikov, želimo poudariti,
                da je najbolje, da svoje pravice (npr. Do informacij, popravkov,
                brisanja itd.) Uveljavljate neposredno pri ustreznem ponudniku.
                Nadaljnje informacije o obdelavi vaših podatkov v družabnih
                omrežjih in možnosti, da izkoristite svojo pravico do ugovora
                ali preklica (tako imenovano izključitev), so spodaj navedene
                pri ustreznem ponudniku družbenih omrežij, ki ga uporabljamo pri
                nas:
              </p>
              <p>
                <b>Facebook</b>
                <br />
                (So-) krmilnik za obdelavo podatkov v Evropi:
                <br />
                Facebook Ireland Ltd, trg 4 Grand Canal, pristanišče Grand
                Canal, Dublin 2, Irska.
                <br />
                Politika zasebnosti (podatkovna politika):
                <br />
                <a
                  href="https://www.facebook.com/about/privacy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/about/privacy
                </a>
                <br />
                Nastavitve za onemogočanje in oglaševanje:
                <br />
                <a
                  href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/ads/preferences /? entry_product =
                  ad_settings_screen
                </a>
              </p>
              <p>
                Facebook zagotavlja skladnost s stopnjo varstva podatkov, ki
                velja v EU, s sprejemanjem in privolitvijo tako imenovanih
                standardnih pogodbenih klavzul EU o varstvu podatkov.
                <br />
                <a
                  href="https://www.facebook.com/about/privacy/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.facebook.com/about/privacy/
                </a>
              </p>
              <p>
                <b>Instagram</b>
                <br />
                (So-) odgovoren za obdelavo podatkov v Evropi:
                <br />
                Facebook Ireland Ltd, trg 4 Grand Canal, pristanišče Grand
                Canal, Dublin 2, Irska.
                <br />
                Politika zasebnosti (podatkovna politika):
                <br />
                <a
                  href="https://instagram.com/legal/privacy/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  http://instagram.com/legal/privacy/
                </a>
                <br />
                Nastavitve za onemogočanje in oglaševanje:
                <br />
                <a
                  href="https://www.instagram.com/accounts/privacy_and_security/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.instagram.com/accounts/privacy_and_security/
                </a>
              </p>
              <p>
                Instagram zagotavlja skladnost s stopnjo varstva podatkov, ki
                velja v EU, s sprejemanjem in privolitvijo tako imenovanih
                standardnih pogodbenih klavzul EU o varstvu podatkov.
              </p>
              <p>
                <b>LinkedIn</b>
                <br />
                (So-) krmilnik za obdelavo podatkov v Evropi:
                <br />
                LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2,
                Irska.
                <br />
                Politika zasebnosti:
                <br />
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
                <br />
                Nastavitve za onemogočanje in oglaševanje:
                <br />
                <a
                  href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  https://www.linkedin.com/ psettings / gostinski nadzor /
                  ponovno ciljanje-opt-out{" "}
                </a>
              </p>
              <p>
                <b>Twitter</b>
                <br />
                Upravljavec podatkov v Evropi:
                <br />
                Twitter International Company, One Cumberland Place, Fenian
                Street, Dublin 2, D02 AX07, Irska.
                <br />
                Politika zasebnosti:
                <br />
                <a
                  href="https://twitter.com/en/privacy"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/en/privacy
                </a>
                <br />
                Informacije o vaših podatkih:
                <br />
                <a
                  href="https://twitter.com/settings/your_twitter_data"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/settings/your_twitter_data
                </a>
                <br />
                Nastavitve za onemogočanje in oglaševanje:
                <br />
                <a
                  href="https://twitter.com/personalization"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  https://twitter.com/personalization
                </a>
              </p>
              <p>
                <strong>Komentarji na forumu</strong>
              </p>
              <p>
                Ko objavite ali ocenite komentar na forumu, bo vaš naslov IP
                shranjen. To je varnostni ukrep, če nekdo objavi nezakonito
                vsebino (žalitve, prepovedano politično propagando itd.). V tem
                primeru se lahko kazensko preganjajo za vsebino. Zato nas zanima
                identiteta avtorja komentarja.
              </p>
              <p>
                Na straneh s številkami je mogoče naročiti. Za to morate vnesti
                svoj e-poštni naslov. Prejeli boste potrditveno e-poštno
                sporočilo, da preverite, ali ste lastnik vnesenega e-poštnega
                naslova. Od obvestil lahko kadarkoli odjavite. Potrditveno
                e-poštno sporočilo vsebuje navodila.
              </p>
              <p>
                <strong>
                  Pravica do odstranitve komentarjev na telefonsko številko
                </strong>
              </p>
              <p>
                Na izgovorih lahko vsak uporabnik pusti komentarje glede katere
                koli telefonske številke. Ti komentarji predstavljajo mnenje
                avtorja komentarja, ne pa mnenja o tej telefonski številki. Zato
                smo ustvarili možnost izbrisa komentarjev. Pri vsakem komentarju
                je gumb, imenovan »Prijavite komentar kot neželeno pošto«. S
                preprostim pritiskom na ta gumb so komentarji neposredno
                izbrisani. Pripombe registriranih uporabnikov, ki imajo račun,
                ne morejo odstraniti drugi uporabniki. V tem primeru je treba o
                e-pošti obvestiti kontaktATtellows.de o zahtevi za odstranitev.
                Uporabniki registriranih kazalnikov imajo možnost, da v 48 urah
                komentirajo zahtevo za brisanje. Če noben verodostojen izpis ne
                bo, bo komentar odstranjen. Več informacij o{" "}
                <strong>
                  odstranjevanju komentarjev za registrirane uporabnike najdete
                  tukaj.
                </strong>
              </p>
              <p>
                <strong>Pravica do informacij</strong>
              </p>
              <p>
                Pravico imate kadarkoli dobiti informacije o vaši osebi. Če
                imate dodatna vprašanja glede pravilnika o zasebnosti ali
                potrebujete več informacij o določeni točki, se lahko obrnete na
                našega uradnika za varstvo podatkov na datenschutzATtellows.de
                (zamenjajte AT z @).
              </p>
              <p>
                <strong>Pravica do izbrisa („pravica do pozabe“)</strong>
              </p>
              <p>
                Posameznik, na katerega se nanašajo osebni podatki, ima pravico
                doseči, da upravljavec brez nepotrebnega odlašanja izbriše
                osebne podatke v zvezi z njim, upravljavec pa ima obveznost
                osebne podatke brez nepotrebnega odlašanja izbrisati, kadar
                velja eden od naslednjih razlogov:
              </p>
              <ul>
                <li>
                  osebni podatki niso več potrebni v namene, za katere so bili
                  zbrani ali kako drugače obdelani;
                </li>
                <li>
                  posameznik, na katerega se nanašajo osebni podatki, prekliče
                  privolitev, na podlagi katere poteka obdelava v skladu s točko
                  (a) člena 6(1) ali točko (a) člena 9(2), in kadar za obdelavo
                  ne obstaja nobena druga pravna podlaga; ,
                </li>
                <li>
                  posameznik, na katerega se nanašajo osebni podatki, obdelavi
                  ugovarja v skladu s Člen 21(1), za njihovo obdelavo pa ne
                  obstajajo nobeni prevladujoči zakoniti razlogi, ali pa
                  posameznik, na katerega se nanašajo osebni podatki, obdelavi
                  ugovarja v skladu s Člen 21(2);
                </li>
                <li>osebni podatki so bili obdelani nezakonito;</li>
                <li>
                  osebne podatke je treba izbrisati za izpolnitev pravne
                  obveznosti v skladu s pravom Unije ali pravom države članice,
                  ki velja za upravljavca;
                </li>
                <li>
                  osebni podatki so bili zbrani v zvezi s ponudbo storitev
                  informacijske družbe iz člena 8(1).
                </li>
              </ul>
              <p>
                Kadar upravljavec objavi osebne podatke in je v skladu z
                odstavkom 1 osebne podatke obvezan izbrisati, ob upoštevanju
                razpoložljive tehnologije in stroškov izvajanja sprejme razumne
                ukrepe, vključno s tehničnimi, da upravljavce, ki obdelujejo
                osebne podatke, obvesti, da posameznik, na katerega se nanašajo
                osebni podatki, od njih zahteva, naj izbrišejo morebitne
                povezave do teh osebnih podatkov ali njihove kopije.
              </p>
              <p>Odstavka 1 in 2 se ne uporabljata, če je obdelava potrebna:</p>
              <ul>
                <li>
                  za uresničevanje pravice do svobode izražanja in obveščanja;
                </li>
                <li>
                  za izpolnjevanje pravne obveznosti obdelave na podlagi prava
                  Unije ali prava države članice, ki velja za upravljavca, ali
                  za izvajanje naloge v javnem interesu ali pri izvajanju javne
                  oblasti, ki je bila dodeljena upravljavcu; ,
                </li>
                <li>
                  iz razlogov javnega interesa na področju javnega zdravja v
                  skladu s točkama (h) in (i) člena 9(2) ter Člen 9(3);
                </li>
                <li>
                  za namene arhiviranja v javnem interesu, za znanstveno- ali
                  zgodovinskoraziskovalne namene ali statistične namene v skladu
                  s Člen 89(1), kolikor bi pravica iz odstavka 1 lahko
                  onemogočila ali resno ovirala uresničevanje namenov te
                  obdelave, ali
                </li>
                <li>
                  za uveljavljanje, izvajanje ali obrambo pravnih zahtevkov.
                </li>
              </ul>
              <p>
                <strong>Pravica do omejitve obdelave</strong>
              </p>
              <p>
                Posameznik, na katerega se nanašajo osebni podatki, ima pravico
                doseči, da upravljavec omeji obdelavo, kadar velja en od
                naslednjih primerov:
              </p>
              <ul>
                <li>
                  posameznik, na katerega se nanašajo osebni podatki, oporeka
                  točnosti podatkov, in sicer za obdobje, ki upravljavcu omogoča
                  preveriti točnost osebnih podatkov;
                </li>
                <li>
                  je obdelava nezakonita in posameznik, na katerega se nanašajo
                  osebni podatki, nasprotuje izbrisu osebnih podatkov ter
                  namesto tega zahteva omejitev njihove uporabe;
                </li>
                <li>
                  upravljavec osebnih podatkov ne potrebuje več za namene
                  obdelave, temveč jih posameznik, na katerega se nanašajo
                  osebni podatki, potrebuje za uveljavljanje, izvajanje ali
                  obrambo pravnih zahtevkov;
                </li>
                <li>
                  je posameznik, na katerega se nanašajo osebni podatki, vložil
                  ugovor v zvezi z obdelavo v skladu s Člen 21(1), dokler se ne
                  preveri, ali zakoniti razlogi upravljavca prevladajo nad
                  razlogi posameznika, na katerega se nanašajo osebni podatki. ,
                </li>
              </ul>
              <p>
                Kadar je bila obdelava osebnih podatkov omejena v skladu z
                odstavkom 1, se taki osebni podatki z izjemo njihovega
                shranjevanja obdelujejo le s privolitvijo posameznika, na
                katerega se ti nanašajo, ali za uveljavljanje, izvajanje ali
                obrambo pravnih zahtevkov ali zaradi varstva pravic druge
                fizične ali pravne osebe ali zaradi pomembnega javnega interesa
                Unije ali države članice.
              </p>
              <p>
                Za uveljavljanje pravice do omejitve obdelave se lahko
                posameznik, na katerega se podatki nanašajo, kadarkoli obrne na
                naslov datenschutzATtellows.de (zamenjajte AT z @).
              </p>
              <p>
                <strong>Pravica do prenosljivosti podatkov</strong>
              </p>
              <p>
                Posameznik, na katerega se nanašajo osebni podatki, ima pravico,
                da prejme osebne podatke v zvezi z njim, ki jih je posedoval
                upravljavcu, v strukturirani, splošno uporabljani in strojno
                berljivi obliki, in pravico, da te podatke posreduje drugemu
                upravljavcu, ne da bi ga upravljavec, ki so mu bili osebni
                podatki zagotovljeni, pri tem oviral, kadar:
              </p>
              <ul>
                <li>
                  obdelava temelji na privolitvi v skladu s točko (a) člena 6(1)
                  ali točko (a) člena 9(2) ali na pogodbi v skladu s točko (b)
                  člena 6(1), in
                </li>
                <li>se obdelava izvaja z avtomatiziranimi sredstvi.</li>
              </ul>
              <p>
                Pri uresničevanju pravice do prenosljivosti podatkov v skladu z
                odstavkom 1 ima posameznik, na katerega se nanašajo osebni
                podatki, pravico, da se osebni podatki neposredno prenesejo od
                enega upravljavca k drugemu, kadar je to tehnično izvedljivo.
                Uresničevanje pravice iz odstavka 1 tega člena ne posega v člen
                17. Ta pravica se ne uporablja za obdelavo, potrebno za
                opravljanje naloge, ki se izvaja v javnem interesu ali pri
                izvajanju javne oblasti, dodeljene upravljavcu.
              </p>
              <p>
                <strong>Pravica do ugovora</strong>
              </p>
              <p>
                Posameznik, na katerega se nanašajo osebni podatki, ima na
                podlagi razlogov, povezanih z njegovim posebnim položajem,
                pravico, da kadar koli ugovarja obdelavi osebnih podatkov v
                zvezi z njim, ki temelji na točki (e) ali (f) člena 6(1),
                vključno z oblikovanjem profilov na podlagi teh določb.
                Upravljavec preneha obdelovati osebne podatke, razen če dokaže
                nujne legitimne razloge za obdelavo, ki prevladajo nad interesi,
                pravicami in svoboščinami posameznika, na katerega se nanašajo
                osebni podatki, ali za uveljavljanje, izvajanje ali obrambo
                pravnih zahtevkov.
              </p>
              <p>
                Kadar se osebni podatki obdelujejo za namene neposrednega
                trženja, ima posameznik, na katerega se nanašajo osebni podatki,
                pravico, da kadar koli ugovarja obdelavi osebnih podatkov v
                zvezi z njim za namene takega trženja, vključno z oblikovanjem
                profilov, kolikor je povezano s takim neposrednim trženjem.
              </p>
              <p>
                V okviru uporabe storitev informacijske družbe in ne glede na
                Direktivo 2002/58/ES lahko posameznik, na katerega se nanašajo
                osebni podatki, uveljavlja pravico do ugovora z avtomatiziranimi
                sredstvi z uporabo tehničnih specifikacij.
              </p>
              <p>
                Za ugovor se obrnite na datenschutzATtellows.de (zamenjajte AT z
                @).
              </p>
              <p>
                <strong>
                  Avtomatizirano sprejemanje posameznih odločitev, vključno z
                  oblikovanjem profilov
                </strong>
              </p>
              <p>
                Posameznik, na katerega se nanašajo osebni podatki, ima pravico,
                da zanj ne velja odločitev, ki temelji zgolj na avtomatizirani
                obdelavi, vključno z oblikovanjem profilov, ki ima pravne učinke
                v zvezi z njim ali na podoben način nanj znatno vpliva.
              </p>
              <p>Odstavek 1 se ne uporablja, če je odločitev:</p>
              <ul>
                <li>
                  nujna za sklenitev ali izvajanje pogodbe med posameznikom, na
                  katerega se nanašajo osebni podatki, in upravljavcem podatkov;
                </li>
                <li>
                  dovoljena v pravu Unije ali pravu države članice, ki velja za
                  upravljavca in določa tudi ustrezne ukrepe za zaščito pravic
                  in svoboščin ter zakonitih interesov posameznika, na katerega
                  se nanašajo osebni podatki, ali ,
                </li>
                <li>
                  utemeljena z izrecno privolitvijo posameznika, na katerega se
                  nanašajo osebni podatki.
                </li>
              </ul>
              <p>
                V primerih, navedenih v točkah (a) in (c) odstavka 2,
                upravljavec podatkov izvede ustrezne ukrepe za zaščito pravic in
                svoboščin ter zakonitih interesov posameznika, na katerega se
                nanašajo osebni podatki, vsaj pravice do osebnega posredovanja
                upravljavca, do izražanja lastnega stališča in izpodbijanja
                odločitve.
              </p>
              <p>
                Odločitve iz odstavka 2 ne temeljijo na posebnih vrstah osebnih
                podatkov iz člena 9(1), razen če se uporablja točka (a) ali (g)
                člena 9(2) in se izvajajo ustrezni ukrepi za zaščito pravic in
                svoboščin ter zakonitih interesov posameznika, na katerega se
                nanašajo osebni podatki.
              </p>
              <p>
                <strong>
                  Pravica do vložitve pritožbe pri nadzornem organu
                </strong>
              </p>
              <p>
                Brez poseganja v katero koli drugo upravno ali pravno sredstvo
                ima vsak posameznik, na katerega se nanašajo osebni podatki,
                pravico, da vloži pritožbo pri nadzornem organu, zlasti v državi
                članici, v kateri ima običajno prebivališče, v kateri je njegov
                kraj dela ali v kateri je domnevno prišlo do kršitve, če meni,
                da obdelava osebnih podatkov v zvezi z njim krši to uredbo.
              </p>
              <p>
                <strong>
                  Pravica do učinkovitega pravnega sredstva zoper nadzorni organ
                </strong>
              </p>
              <p>
                Brez poseganja v katero koli drugo upravno ali izvensodno
                sredstvo ima vsaka fizična ali pravna oseba pravico do
                učinkovitega pravnega sredstva zoper pravno zavezujočo odločitev
                nadzornega organa v zvezi z njo. Brez poseganja v katero koli
                drugo upravno ali izvensodno sredstvo ima vsak posameznik, na
                katerega se nanašajo osebni podatki, pravico do učinkovitega
                pravnega sredstva, kadar nadzorni organ, ki je pristojen na
                podlagi členov 55 in 56, ne obravnava pritožbe ali če
                posameznika, na katerega se nanašajo osebni podatki, v treh
                mesecih ne obvesti o stanju zadeve ali odločitvi o pritožbi,
                vloženi na podlagi člena 77.
              </p>
              <p>
                <strong>Vprašanja o zasebnosti</strong>
              </p>
              <p>
                Če bi se lahko pojavila nadaljnja vprašanja ali predlogi glede
                teme zasebnosti, se obrnite na našega uradnika za zasebnost
                podatkov Christian Anton na datenschutzATtellows.de (zamenjajte
                AT z @).
              </p>
              <p>
                <strong>Uporaba podatkov v aplikacijah</strong>
              </p>
              <p>
                Pokažite pripombe in ocene iz govorne platforme za ocenjevanje
                telefonskih številk v aplikacijah. V tem procesu se ne
                uporabljajo ali shranijo osebni podatki avtorja komentarja. Za
                kategorizacijo telefonskih številk se uporabljajo samo
                predloženi komentarji in iz njih izhajajoče ocene. Aplikacije,
                ki temeljijo na teh podatkih, vodijo tiskovne in tretje osebe,
                ki delajo v pogodbenem razmerju.
              </p>
              <p>
                Da bi zagotovili celoten obseg premijskih aplikacij iPhone-app
                „tellows pro Caller ID“ in „tellows – Reverse Search“, je med
                namestitvijo potrebno ustvariti tri nove stike v vašem pametnem
                telefonu. V teh stikih se shranijo seznami rezultatov, pri čemer
                uporabniku dajo informacije o vrsti in oceni neželenega
                klicatelja. Med namestitvijo je zahteva za odobritev dostopa do
                stikov pametnega telefona. Osebnih stikov in podatkov ni
                dostopno. Podrobne pogoje uporabe aplikacij za iPhone so na
                voljo tukaj.
              </p>
              <p>
                <a href="https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseapp">
                  https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseapp
                </a>
              </p>
              <p>
                „tellows Caller &amp; ID Block“ označuje dohodne klice in
                prenese telefonsko številko, da jo primerja s črnim seznamom in
                jih blokira, če je to potrebno. Podrobne pogoje uporabe
                aplikacije Android lahko najdete tukaj.
              </p>
              <p>
                <a href="https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseappandroid">
                  https://www.tellows.co.uk/c/about-tellows-uk/terms-of-use/#termsofuseappandroid
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
