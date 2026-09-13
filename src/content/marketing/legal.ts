import type { ArticleBlock } from "@/content/marketing/resources";

export type LegalDoc = {
  slug: string;
  label: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  body: ArticleBlock[];
};

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy",
    label: "Privacy",
    title: "Privacy Notice",
    description:
      "How Inmind collects, uses and protects personal data across our website and services.",
    updated: "01 June 2026",
    intro:
      "This website or mobile application (the Application) is owned and operated by The ADMIND Limited (Inmind, we, us or our), a limited liability company registered in Kenya. You may contact us using the details set out in the Contact and support section below.",
    body: [
      { type: "h2", text: "1. Purpose and scope of this notice" },
      {
        type: "p",
        text: "This privacy notice explains how we collect, use, disclose, store and protect personal data relating to users of the Application, including partner applicants, job applicants, members, subscribers and customers. It describes the types of personal data we process, why we process it, the lawful basis for that processing and the rights available to you under applicable data protection and privacy laws, including the General Data Protection Regulation where applicable.",
      },
      {
        type: "p",
        text: "In this notice, personal data means information relating to an identified or identifiable person. By using the Application or submitting personal data to us, you acknowledge the practices described here.",
      },
      { type: "h2", text: "2. Personal data we collect" },
      {
        type: "p",
        text: "We may collect the following categories of personal data directly from you:",
      },
      {
        type: "ul",
        items: [
          "Account registration details: information submitted when opening an account, including your name, email address, telephone number, job title, company name, year of birth, identification number, payment and billing details, and any other information required to record and process your campaigns.",
          "Customer and transaction details: information provided when registering or transacting with us, such as your full name, address, email address, business address, telephone number, gender, approximate age, industry, career level, estimated budget spend, details about your work, and billing and payment information.",
          "Other information you submit: personal data you provide when contacting us by phone, chat or email, responding to surveys, using this Application or any other application we operate, or otherwise interacting with us.",
        ],
      },
      {
        type: "p",
        text: "Where identity verification is required, you authorise Inmind to collect and share relevant identification information with Smile Identity Inc. so that the information can be verified against official sources, as explained in the identity verification section below.",
      },
      { type: "h2", text: "3. Information collected automatically" },
      {
        type: "p",
        text: "Log information: when you access the Application, our servers automatically record certain information sent by your browser. This may include your IP address, which may indicate the country from which you are connecting, your browser type and settings, and the date and time of your request.",
      },
      {
        type: "p",
        text: "Cookies and similar tools: the Application uses cookies and related technologies to distinguish you from other users, support a better browsing experience and help us improve the Application's features and performance.",
      },
      { type: "h2", text: "4. Identity checks and facial recognition" },
      {
        type: "p",
        text: "To help maintain a secure creator commerce platform, Inmind uses identity verification tools provided by SmileID, a third-party provider that supports digital identity verification, fraud prevention, anti-money laundering checks and know-your-customer compliance.",
      },
      { type: "h3", text: "Verification consent and requirement" },
      {
        type: "p",
        text: "Because verification involves processing by a third party with whom you may not have a direct contract, we require your express consent. You may provide or withhold consent during the KYC process in the creator app; however, identity verification, including facial recognition processing, is mandatory for platform users.",
      },
      { type: "h3", text: "Verification information collected" },
      {
        type: "ul",
        items: [
          "Facial photographs.",
          "Full name and date of birth.",
          "Identification number, such as a national ID or passport number.",
          "Relevant revenue authority personal identification number.",
          "Other personal information that may be requested for identity verification from time to time.",
        ],
      },
      {
        type: "p",
        text: "This information is required for onboarding, identity confirmation and compliance with applicable legal and regulatory requirements. You are responsible for ensuring that the information you submit is accurate, genuine and kept up to date, and for promptly requesting correction or deletion of inaccurate information where appropriate.",
      },
      { type: "h3", text: "Why verification data is used" },
      {
        type: "p",
        text: "Identity verification information is collected and processed for user identity verification and for compliance with legal and regulatory obligations, including anti-money laundering and identity theft prevention requirements. Verification data may also be processed where necessary to perform contractual obligations with brand companies and other Inmind partners. It will be used only for identity verification and related compliance purposes, unless we obtain your consent for a different or additional purpose.",
      },
      { type: "h3", text: "Storage, sharing, protection and retention" },
      {
        type: "p",
        text: "SmileID stores verification data securely and applies safeguards such as encryption and access controls to protect it from unauthorised access or breaches. Inmind may access the data only where necessary to monitor processing activities, meet its data controller obligations and support compliance and security. Facial recognition and related verification data are shared with SmileID solely for identity verification, and are not disclosed to other third parties unless required by law or unless you have given express consent.",
      },
      {
        type: "p",
        text: "Verification data is retained only for as long as necessary for the purposes described in this notice or as required by law. Retention will generally continue while the relevant account remains active. Once an account has been deleted and all applicable retention periods have expired, Inmind will notify SmileID so that the relevant identity verification data can be permanently erased.",
      },
      { type: "h2", text: "5. How and why we use personal data" },
      {
        type: "ul",
        items: [
          "To acknowledge and process your account application, including placing you on a waiting list where necessary, so that we can review your application and establish the relevant link with the advertiser.",
          "To contact you about user, customer or member surveys and use any information you choose to provide in response, where you consented to being contacted for that purpose.",
          "To administer contests, promotions or similar activities and to notify you of the outcome using the email address supplied.",
          "To send newsletters where you have opted in. You may unsubscribe at any time using the link included at the bottom of each newsletter email.",
          "To allow Inmind, its affiliated businesses or selected third-party service providers to send you information about goods, services, events or promotions that may interest you, by email and only where you provided consent.",
          "To use your personal data for any other purpose to which you consent at the time the information is provided.",
          "To support legitimate business interests, including responding to inquiries or complaints, administering and improving the Application, analysing usage, personalising member communications, maintaining suppression lists, anonymising or aggregating data for research, conducting technical operations, and protecting legal rights or complying with obligations.",
        ],
      },
      {
        type: "p",
        text: "In this notice, legitimate interests means the interests of Inmind and its affiliated businesses in operating and managing the organisation. When relying on legitimate interests, we consider and balance the potential impact on you and your rights under data protection laws.",
      },
      { type: "h2", text: "6. Disclosure of personal data" },
      {
        type: "ul",
        items: [
          "Service providers: we may engage selected third parties to support our operations, including payment processors, credit reference agencies, IT suppliers and contractors, data hosting providers, delivery partners, web analytics providers, digital advertising providers, and marketing or sales software providers. These parties may access, process or store personal data only as necessary to perform the services we have instructed them to provide.",
          "Affiliated businesses: as we operate across different locations, our affiliated businesses may access and process the information we collect from you to provide requested services. They may only use your information for the purposes for which it was originally collected.",
          "Business transfers: if our business is sold or our company assets are acquired by a third party, personal data relating to applicants, members or customers may form part of the transferred assets.",
          "Administrative, legal and protective reasons: we may disclose personal data where necessary to comply with legal obligations, judicial or regulatory proceedings, court orders or other legal processes, to enforce our terms, or to protect Inmind, our members, applicants, customers or contractors from loss or harm.",
        ],
      },
      { type: "h2", text: "7. Payment information" },
      {
        type: "p",
        text: "Card and other payments made through the Application are processed by third-party payment providers. Payment information you submit is securely stored and encrypted by those providers using current industry standards. We do not directly process or store your debit or credit card information.",
      },
      {
        type: "p",
        text: "We may arrange for card or payment details submitted for member or customer transaction fees to be stored so that those fees can be processed. You may opt out of having third-party payment providers retain your card or payment details, in which case you may need to provide payment details again for future subscription fees or purchases.",
      },
      { type: "h2", text: "8. Cross-border transfers of personal data" },
      {
        type: "p",
        text: "Your personal data may be transferred to and stored in countries other than the country where it was first collected, including outside the Republic of Kenya, where this is necessary for service providers or affiliated businesses to carry out the purposes described in this notice. Where personal data is transferred outside the Republic of Kenya, we will take appropriate steps to ensure that it remains protected and will apply suitable safeguards in line with applicable law.",
      },
      { type: "h2", text: "9. Security and confidentiality" },
      {
        type: "p",
        text: "Where we provide you with, or you choose, a password or login details for restricted areas of the Application, you are responsible for keeping those details confidential and must not share them with anyone else.",
      },
      {
        type: "p",
        text: "Transmission of information over the internet or public communication networks cannot be guaranteed to be completely secure. We use appropriate technical and organisational measures to protect personal data submitted to us against unauthorised or unlawful access, loss, destruction or damage, but we cannot guarantee absolute security for information submitted online.",
      },
      { type: "h2", text: "10. Retention of personal data" },
      {
        type: "p",
        text: "We retain personal data only for as long as reasonably necessary for the purposes described in this notice or for any longer period required by legal, regulatory, accounting or reporting obligations. Membership records are retained for six years after expiry or termination of membership. Information submitted through the Application is retained for two years after account closure or after our last contact with you. Where you consent to marketing communications, we retain the relevant data until you unsubscribe.",
      },
      {
        type: "p",
        text: "At the end of the applicable retention period, we will securely destroy personal data in accordance with applicable laws and regulations. In some cases, we may anonymise personal data so that it can no longer be linked to you, in which case it will no longer be personal data.",
      },
      { type: "h2", text: "11. Your rights and requests" },
      {
        type: "p",
        text: "Applicable data protection laws may give you rights in relation to your personal data, including verification and facial recognition data. Where available, these rights may include access, rectification, erasure, restriction of processing, data portability, objection to processing and withdrawal of consent. If you wish to exercise any of these rights, please contact us using the details in the contact and support section. We may request additional information to verify your identity before responding.",
      },
      { type: "h2", text: "12. Account closure and profile removal" },
      {
        type: "p",
        text: "If you wish to delete your account or profile, please email support@inmind.media from the address associated with your account and include your username so that we can process the request accurately.",
      },
      {
        type: "p",
        text: "It may not be technically possible to remove every record of information you have provided from our servers. Because we maintain backups to protect against accidental data loss, a copy of your profile may remain in a form that is difficult or impossible for us to locate or erase immediately. We may also delete an account at any time where required by legal process, where necessary to investigate fraud or a breach of our terms, or where needed in connection with harm caused to a third party or their rights.",
      },
      { type: "h2", text: "13. Contact and support" },
      {
        type: "p",
        text: "Questions, comments, privacy requests or concerns about verification data may be sent to support@inmind.media.",
      },
      { type: "h2", text: "14. Changes to this notice" },
      {
        type: "p",
        text: "We may update this privacy notice from time to time, and any changes will be posted on this page. Please review it regularly for updates. Where required by applicable law, we will notify you of material or substantive changes.",
      },
    ],
  },
  {
    slug: "terms",
    label: "Terms",
    title: "Platform Use Agreement",
    description:
      "The terms that govern access to and use of Inmind applications, websites, content, products and services.",
    updated: "01 June 2026",
    intro:
      "These Terms of Use regulate your access to and use of the applications, websites, content, products and services made available in the country where you are located by Inmind, including its subsidiaries, representatives, affiliates, officers and directors. Please review these terms carefully before accessing or using the services.",
    body: [
      { type: "h2", text: "1. Agreement formation and acceptance" },
      {
        type: "p",
        text: "By accessing or using the services, you agree to be bound by these terms, creating a contractual relationship between you and Inmind. If you do not accept these terms, you must not access or use the services. These terms replace any previous agreements or arrangements between you and Inmind. Inmind may terminate these terms or any services as they apply to you, or may stop offering or restrict access to all or part of the services, at any time and for any reason.",
      },
      {
        type: "p",
        text: "Additional terms may apply to specific services, including rules relating to particular events, activities or promotions. Such additional terms form part of these terms for those services and, where there is any inconsistency, the additional terms take priority for the applicable services.",
      },
      {
        type: "p",
        text: "Inmind may update these terms from time to time. Any changes take effect once Inmind posts the updated terms at this location or publishes amended policies on the relevant service. Continued access to or use of the services after posting constitutes acceptance of the amended terms. Inmind's collection and use of personal information in connection with the services is explained in the privacy notice.",
      },
      { type: "h2", text: "2. Platform services and access rights" },
      {
        type: "p",
        text: "The services consist of a technology platform that enables users of Inmind applications or websites to allow advertisers to create social media marketing campaigns and obtain the services of creators who perform marketing services based on information supplied by users. Unless Inmind agrees otherwise with you in a separate written agreement, the services are provided only for your personal use.",
      },
      {
        type: "p",
        text: "You acknowledge that Inmind does not itself provide social media marketing campaigns or marketing services, nor does it act as an advertiser or creator. All such services are provided by independent third-party contractors who are not employees of Inmind or any of its affiliates.",
      },
      { type: "h3", text: "Licence" },
      {
        type: "p",
        text: "Provided that you comply with these terms, Inmind grants you a limited, non-exclusive, non-sublicensable, revocable and non-transferable licence to access and use the applications on your personal device solely in connection with your use of the services, and to access and use any content, information and related materials made available through the services solely for your personal, non-commercial use. All rights not expressly granted are reserved by Inmind and its licensors.",
      },
      { type: "h3", text: "Restrictions" },
      {
        type: "ul",
        items: [
          "Do not remove copyright, trademark or other proprietary notices from any part of the services.",
          "Do not copy, modify, create derivative works from, distribute, license, lease, sell, resell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the services except as expressly allowed by Inmind.",
          "Do not decompile, reverse engineer or disassemble the services except where permitted by applicable law.",
          "Do not link to, mirror or frame any part of the services.",
          "Do not run or introduce any programs or scripts designed to scrape, index, survey, data mine, overload or interfere with the operation of any part of the services.",
          "Do not attempt to gain unauthorised access to, or interfere with, any part of the services or their related systems or networks.",
        ],
      },
      { type: "h3", text: "Service delivery, external services and IP" },
      {
        type: "p",
        text: "Certain parts of the services may be offered under Inmind's various brands or request options, and may be provided by Inmind subsidiaries and affiliates or by independent third-party providers including marketing companies, media houses, advertisers and creators. The services may also be available through, or used together with, third-party services and content that Inmind does not control, and separate terms and privacy policies may govern your use of those. The services, together with all rights connected to them, remain the property of Inmind or its licensors, and these terms do not give you rights to use Inmind's names, logos, trademarks or service marks.",
      },
      { type: "h2", text: "3. User access, accounts and conduct" },
      { type: "h3", text: "Account registration and security" },
      {
        type: "p",
        text: "To use most parts of the services, you must create and keep an active personal account. You must be at least 18 years old, or the age of legal majority in your jurisdiction if higher. Registration requires certain personal details, including your name, address, mobile phone number and age, as well as at least one valid payment method. You agree to keep your account information accurate, complete and current. You are responsible for all activity carried out under your account and must keep your username and password secure. Unless Inmind gives written permission, you may hold only one account.",
      },
      { type: "h3", text: "Eligibility and acceptable use" },
      {
        type: "p",
        text: "The service is not available to persons under 18 years of age. You must not allow third parties to use your account, and you may not assign or transfer your account to any other person or entity. You agree to comply with all applicable laws when using the services and to use them only for lawful purposes. You must not use the services in a way that causes nuisance, annoyance, inconvenience or personal harm to any third-party provider or other person. In some cases you may be required to provide proof of identity, and refusal may result in denial of access.",
      },
      { type: "h3", text: "Content submitted by users" },
      {
        type: "p",
        text: "Inmind may allow you to submit, upload, publish or otherwise provide text, audio, visual content and information through the services. Any user content you provide remains your property. However, by providing user content to Inmind, you grant Inmind a worldwide, perpetual, irrevocable, transferable, royalty-free licence, including the right to sublicense, to use, copy, modify, create derivative works from, distribute, publicly display, publicly perform and otherwise exploit that user content in any manner and through any format or distribution channel now known or later developed.",
      },
      {
        type: "p",
        text: "You represent and warrant that you are either the sole and exclusive owner of all user content or you hold all rights, licences, consents and releases necessary to grant the licence described above, and that the content does not infringe, misappropriate or violate any third party's intellectual property, proprietary rights, publicity rights, privacy rights or any applicable law. You agree not to provide user content that is defamatory, libellous, hateful, violent, obscene, pornographic, unlawful or otherwise offensive. Inmind may, but is not required to, review, monitor or remove user content at its sole discretion.",
      },
      { type: "h3", text: "Connectivity, devices and system access" },
      {
        type: "p",
        text: "You are responsible for securing the data network access required to use the services, and for any data and messaging charges that apply. You are also responsible for obtaining and maintaining compatible hardware or devices needed to access and use the services and any related updates. Inmind does not guarantee that the services will operate on any specific hardware or device, and the services may be affected by failures and delays inherent in internet and electronic communications.",
      },
      { type: "h2", text: "4. Advertising restrictions and compliance rules" },
      {
        type: "ul",
        items: [
          "Alcohol content: advertising involving alcohol must be targeted only to the appropriate legal age group and is completely prohibited in certain countries, including Gambia, Egypt, Afghanistan, Brunei, Bangladesh, Kuwait, Libya and Turkey. All local rules governing alcohol marketing and distribution must be followed.",
          "Discriminatory practices: advertisements must not discriminate against, or promote discrimination against, people on the basis of personal characteristics such as race, ethnicity, colour, national origin, religion, age, sex, sexual orientation, gender identity, family status, disability, medical condition or genetic condition.",
          "Government and social affairs: government advertisements and social issue content are permitted provided they contain factual information and do not include misleading statements.",
          "Pharmaceuticals: prescription medicines may not be promoted through Inmind. Over-the-counter medicines are permitted, provided they comply with applicable local regulations.",
          "Inappropriate content: content involving sexual material, gambling, cryptocurrency, spyware or malware, drugs and drug paraphernalia, copyright or trademark infringement, counterfeit goods, unauthorised ticket sales, weapons and weapon accessories is prohibited.",
        ],
      },
      { type: "h3", text: "Political and election-related content" },
      {
        type: "p",
        text: "This includes any advertisement created by, on behalf of, or about a candidate for public office, a political figure, a political party or a political action committee; any advertisement advocating a particular election outcome; content relating to any election, referendum or ballot initiative, including voter mobilisation or election information campaigns; content concerning any social issue in the location where the advertisement is displayed; or content otherwise regulated as political advertising.",
      },
      {
        type: "ul",
        items: [
          "Political campaigns must present factual information about previous achievements and currently fulfilled agenda items.",
          "They must not contain prejudicial content against political opponents or associates. Personal attacks and improper political tactics will not be endorsed.",
          "Any disclaimer must accurately identify the entity or person responsible for the advertisement.",
          "The disclaimer must not include URLs or acronyms unless they form part of the organisation's name, and that name must be accurately reflected on the website provided.",
          "The disclaimer must not contain profanity, objectionable language, or unrecognisable words or phrases, and must not falsely suggest that a foreign leader is responsible for the advertisement.",
        ],
      },
      { type: "h2", text: "5. Prohibited and restricted content categories" },
      {
        type: "ul",
        items: [
          "Sexual content: pornography, escort services and prostitution, full and partial nudity, modelled clothing that is sexual in nature, dating sites focused on facilitating sexual encounters or infidelity, and dating sites in which money, goods or services are exchanged in return for a date.",
          "Gambling content: gambling-related content is prohibited on and around the Inmind platform.",
          "Cryptocurrency: promotion of cryptocurrency trading or mining is prohibited.",
          "Drugs and drug paraphernalia: promotion of any substance that is illegal under applicable local or state laws is prohibited, including recreational and herbal drugs, accessories associated with drug use, dispensaries and depictions of hard drug use.",
          "Trademark and copyright infringement: campaigns must not display content, links, images or embedded media that could mislead users about the advertiser's brand affiliation, including promoted trend names that use third-party names misleadingly.",
          "Weapons and weapon accessories: promotion of items that may endanger the safety of users or people nearby is prohibited.",
        ],
      },
      { type: "h2", text: "6. Charges, payments and taxes" },
      {
        type: "p",
        text: "Using the services may result in charges for services or goods received from a third-party provider. When you request access to certain services obtained through Inmind, Inmind will facilitate payment of the applicable charges on behalf of the third-party provider, acting as that provider's limited payment collection agent. Payment made in this way is treated as if you had paid the third-party provider directly. Charges may include other applicable fees, such as booking and processing fees, and will include applicable taxes where required by law. Charges paid are final and non-refundable unless Inmind determines otherwise.",
      },
      {
        type: "p",
        text: "Inmind may set, remove or revise charges at any time and at its sole discretion, and charges in certain geographic areas may increase significantly during periods of high demand. Inmind will make reasonable efforts to notify you of applicable charges, but you remain responsible for charges incurred under your account. From time to time, Inmind may offer promotional offers or discounts to certain users. You may cancel a request for services before the third-party provider accepts it, in which case a cancellation fee may apply.",
      },
      { type: "h3", text: "Tax deductions and declarations" },
      {
        type: "p",
        text: "All payments are subject to the applicable tax laws and rates of the jurisdiction in which the creator is based. Creators based in Kenya will receive income after deduction of withholding tax and will be issued a withholding certificate as proof of the tax deducted. Creators in other countries will receive gross payment and will be responsible for filing and paying any taxes due from them. Inmind will not be liable for any tax evasion or failure by such creators to comply with their tax obligations.",
      },
      { type: "h3", text: "Payment collection methods" },
      {
        type: "p",
        text: "All charges are payable immediately, and Inmind will facilitate payment using the preferred payment method listed in your account, then send a receipt by email. If your primary payment method is expired, invalid or cannot be charged, you agree that Inmind, acting as the third-party provider's limited payment collection agent, may use any secondary payment method available in your account. If payments are delayed for any reason, contact support@inmind.media or use the in-app support chat.",
      },
      { type: "h2", text: "7. Warranties, liability limits and protection" },
      {
        type: "p",
        text: "The services are provided on an as is and as available basis. Inmind disclaims all representations and warranties, whether express, implied or statutory, that are not expressly stated in these terms, including implied warranties of merchantability, fitness for a particular purpose and non-infringement. Inmind makes no representation, warranty or guarantee about the reliability, timeliness, quality, suitability or availability of the services, or that the services will be uninterrupted or free from errors, and does not guarantee the quality, suitability, safety or ability of third-party providers.",
      },
      {
        type: "p",
        text: "Inmind shall not be liable for any indirect, incidental, special, exemplary, punitive or consequential damages, including loss of profits, loss of data, personal injury or property damage arising from, connected with or resulting from any use of the services, even if Inmind has been advised that such damages may occur. This includes damages arising from your use of or reliance on the services, your inability to access them, or any transaction or relationship between you and any third-party provider. These limitations are not intended to limit liability or change any consumer rights that cannot be excluded under applicable law.",
      },
      {
        type: "p",
        text: "You agree to indemnify and hold harmless Inmind and its officers, directors, employees and agents from all claims, demands, losses, liabilities and expenses, including legal fees, arising from or connected with your use of the services, your breach of these terms, Inmind's use of your user content, or your violation of any third party's rights.",
      },
      { type: "h2", text: "8. Applicable law and dispute process" },
      {
        type: "p",
        text: "Except where these terms state otherwise, any dispute, conflict, claim or controversy arising out of or relating to the services, payments or these terms, including issues concerning their validity, interpretation or enforceability, must first be referred for resolution through support@inmind.media. These terms are governed exclusively by, and interpreted in accordance with, the laws of the United Kingdom.",
      },
      {
        type: "p",
        text: "If a dispute is not resolved through support, it shall be submitted under the rules of the London Court of International Arbitration. The parties are deemed to have agreed in writing that any arbitration between them will be conducted under the LCIA Rules, including any amended rules adopted before the arbitration begins, and that those rules form part of their agreement.",
      },
      { type: "h2", text: "9. Miscellaneous legal terms" },
      {
        type: "p",
        text: "Copyright infringement claims should be directed to Inmind's designated agent. Inmind may provide notices through a general notice on the services, by email to the address listed in your account, or by written communication sent to the address recorded in your account. You may give notice to Inmind by sending written communication to Inmind's address.",
      },
      {
        type: "p",
        text: "You may not assign or transfer these terms without Inmind's prior written consent. You authorise Inmind to assign or transfer these terms, in whole or in part, including to a subsidiary or affiliate, a purchaser of Inmind's equity, business or assets, or a successor following a merger. No joint venture, partnership, employment or agency relationship is created between you, Inmind or any third-party provider.",
      },
      {
        type: "p",
        text: "If any provision of these terms is found to be illegal, invalid or unenforceable, that provision will be treated as excluded to that extent, and the legality, validity and enforceability of the remaining provisions will not be affected. These terms constitute the entire agreement between the parties concerning their subject matter and supersede all prior or contemporaneous agreements relating to it.",
      },
    ],
  },
  {
    slug: "cookies",
    label: "Cookies",
    title: "Website Cookie Notice",
    description:
      "How Inmind uses cookies and similar technologies, and the choices available to you.",
    updated: "01 June 2026",
    intro:
      "This cookie notice explains how The AdMind Limited uses cookies and similar technologies when you access or use our website. It describes what these technologies are, why we use them, and the choices available to you. In some cases, cookies may collect information that identifies you directly, or information that could identify you when combined with other data.",
    body: [
      { type: "h2", text: "1. Understanding cookies and similar tools" },
      {
        type: "p",
        text: "Cookies are small text or data files stored on your computer, tablet or mobile device when you visit a website. They are commonly used to help websites function properly, improve performance, and provide website owners with usage and reporting information.",
      },
      {
        type: "p",
        text: "Cookies placed by the website owner are known as first-party cookies. Cookies placed by other organisations are referred to as third-party cookies. Third-party cookies allow external features and services, such as advertising, analytics and interactive content, to operate on or through the website. These third parties may recognise your device when it visits this website and certain other websites.",
      },
      { type: "h2", text: "2. Reasons we use cookies" },
      {
        type: "p",
        text: "We use first-party and third-party cookies for several purposes. Some cookies are required for technical reasons and allow the website to function; these are commonly called essential or strictly necessary cookies. Other cookies help us understand user interests, improve the website experience, and support advertising, analytics and related third-party functions.",
      },
      {
        type: "ul",
        items: [
          "Persistent cookies: these remain on a device for the period set in the cookie and are activated whenever the user returns to the website that created them.",
          "Session cookies: these link a user's actions during a single browser session. A session begins when the browser window is opened and ends when it is closed, and these cookies are deleted once the browser is closed.",
        ],
      },
      { type: "h2", text: "3. Cookie choices and preference controls" },
      {
        type: "p",
        text: "You can choose whether to accept or decline cookies. The cookie consent manager allows you to manage your preferences and select which categories of cookies to allow or reject. Strictly necessary cookies cannot be turned off because they are required for the website and its core services to operate.",
      },
      {
        type: "p",
        text: "You can access the cookie consent manager through the notification banner and on our website. If you reject cookies, you may still use the website, but some features or areas may not work fully. You can also use your browser settings to accept, refuse, block or delete cookies.",
      },
      { type: "h2", text: "4. Consent requirements" },
      {
        type: "p",
        text: "Strictly necessary cookies may be used without asking for your consent because they are required for the website to operate. For performance, functionality, targeting and social media cookies, we request your consent before placing them on your device. You may give consent by continuing to use our website, selecting the relevant option on the cookie banner, or updating your choices in the cookie preference centre.",
      },
      {
        type: "p",
        text: "If you do not wish to give consent, or if you later decide to withdraw it, you should delete, block or disable the relevant cookies through your browser settings, or update your preferences in the cookie preference centre. Disabling these cookies may affect how the website works and may limit access to certain features.",
      },
      { type: "h2", text: "5. Changing or withdrawing consent" },
      {
        type: "p",
        text: "You may withdraw your consent at any time by deleting cookies through your internet browser settings, or by selecting the cookie button at the bottom of this policy and changing your preferences.",
      },
      { type: "h2", text: "6. Cookie categories used on our website" },
      {
        type: "p",
        text: "Strictly necessary cookies allow you to move around the website and use essential services, including secure areas. Without these cookies, requested services cannot be provided. We use them to recognise when you are logged in and verify your access, ensure you are connected to the appropriate service when the website is updated, and support security and protection measures. If these cookies are blocked, we cannot guarantee that the website or its security features will work correctly during your visit.",
      },
      {
        type: "p",
        text: "Performance cookies collect information about how visitors use the website, including pages viewed and errors encountered. They do not collect information that directly identifies you. We use them for website analytics, supplying anonymous statistics about website usage, and for error monitoring. Some performance cookies are managed by third parties on our behalf, and we do not allow those third parties to use the cookies for other purposes.",
      },
      {
        type: "p",
        text: "Functional cookies allow us to provide enhanced features and personalised experiences. They may be placed by third-party providers whose services appear on our pages. If you do not allow these cookies, some services may not work as intended.",
      },
      {
        type: "p",
        text: "Targeting-related tools may support content sharing and similar services, for example when users share our stories on social networks through a third-party sharing service. Social media cookies are placed by social media services that we include on the website so you can share our content with your networks. These cookies may track your browser across other websites and build a profile of your interests, which may affect the content and messages shown to you elsewhere. A single cookie may be used for more than one of the purposes described in this policy.",
      },
      { type: "h2", text: "7. Details of cookies used on this website" },
      {
        type: "p",
        text: "These cookies collect information that may be used in aggregated form to help us understand website usage, measure the effectiveness of our marketing activities, and customise the website experience for you.",
      },
      { type: "h2", text: "8. Managing cookies through your browser" },
      {
        type: "p",
        text: "Cookie controls differ between browsers. For guidance on refusing or managing cookies, please consult the help menu of your browser, whether that is Chrome, Firefox, Safari, Edge, Opera or another browser.",
      },
      { type: "h2", text: "9. Contact and further enquiries" },
      {
        type: "p",
        text: "If you have any questions, comments or requests about this cookie notice, please contact us at support@inmind.media.",
      },
    ],
  },
];

export function findLegalDoc(slug: string) {
  return LEGAL_DOCS.find((doc) => doc.slug === slug);
}
