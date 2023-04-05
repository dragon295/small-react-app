import React from 'react';

import { Typography, Container, Box, Button } from '@mui/material';

import { Link } from 'react-router-dom';

import HeaderImg from '../../../components/HeaderImg/HeaderImg';

import Books from '../../../assets/header/books.jpg';

const TermsConditions = () => {
  return (
    <>
      <HeaderImg imgUrl={Books} page='terms-conditions' />
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6'>do we use cookies?</Typography>
          <span>
            Please read these terms and conditions carefully. These terms and
            conditions govern and apply to all and any use, access and
            availability of the Service (as defined below).
            <br />
            <br />
            These terms and conditions also include our e-commerce terms,
            competition rules, and end-user license agreement for any Games that
            you buy through the Service and our separate{' '}
            <Link to='/policies/private-policy'>Private Policy</Link> and{' '}
            <Link to='/policies/refund-policy'>Refund Policy</Link>
            .<br />
            <br />
            By accessing the Service (and each time that you do so) you signify
            that you have read, understand and are able to agree to be bound by
            these terms and conditions (including any terms and conditions
            incorporated into or referred to by these terms and conditions)
            whether or not you have a registered GMGL account. You can use the
            Service through one registered account.
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6'>Table of Contents</Typography>
          <ol style={{ textAlign: 'left' }}>
            <li>
              <a className='cookie-ref' href='#anchor1'>
                INTRODUCTION AND DEFINITIONS
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor2'>
                REGISTRATION, ACCOUNT AND PASSWORD
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor3'>
                RIGHTS OF USE AND INTELLECTUAL PROPERTY RIGHTS
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor4'>
                RESTRICTIONS AND OBLIGATIONS
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor5'>
                FORUM AND COMMUNICATIONS
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor6'>
                LIABILITY
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor7'>
                TERMINATION
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor8'>
                PURCHASES
              </a>
            </li>
            <li>
              <a className='cookie-ref' href='#anchor9'>
                PRICE AND PAYMENT
              </a>
            </li>
          </ol>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6' id='anchor1'>
            1. INTRODUCTION AND DEFINITIONS
          </Typography>
          <span>
            The following services are made available by Abstraction in Ha Noi
            city Viet Nam, and all subsidiaries of Abstraction Limited (“GMGL”,
            “we”, “us” or “our”):
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                the online digital distribution e-commerce and entertainment
                platform owned and operated by GMGL and available from time to
                time at or using:
              </span>
              <ul>
                <li>
                  <span>
                    our website www.log.com or such other websites as we operate
                    from time to time (the “Website”), or
                  </span>
                </li>
                <li>
                  <span>
                    the software we make available for mobile or other devices
                    which may be labelled “Abstraction” or “Playfire” or such
                    other software as we may make available (together with any
                    online or electronic documentation and all patches, updates
                    and supplements thereto) (the “Apps”) or
                  </span>
                </li>
                <li>
                  <span>
                    through partner websites which are made available by third
                    parties (the “Partner Websites”);
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <span>
                we may make Games (defined below) digitally available for
                purchase, resale and / or download through the Website, Apps or
                Partner Websites;
              </span>
            </li>
            <li>
              <span>
                content, materials, postings, data, messages and communications
                sent, posted, placed on, made to or otherwise communicated to,
                from or using the Website, Apps or Partner Websites (our
                “Communications”);
              </span>
            </li>
            <li>
              <span>
                the online social network made available by us which may, from
                time to time be accessed in part or in full through one or more
                of the Website or Apps, and allow registered users and gamers to
                track their game statistics, and see what their friends are
                playing;
              </span>
            </li>
          </ul>
          <span>
            <br />
            (together, the above constitute our “Service”).
            <br />
            <br />
            “Communications” means any content, materials, postings, data,
            messages and communications sent, submitted, posted, placed on, made
            to or otherwise communicated to, from or using the Service;
            <br />
            <br />
            “Game” or “Games” means those computer or console games, digitally
            available which are or may be purchased and / or downloaded using
            the Service and resold to or through the Website in accordance with
            these terms and conditions and used in accordance with the
            applicable Game EULA;
            <br />
            <br />
            “Game EULA” means the end user licence agreement applicable to a
            Game in the form substantially set out in Section 24 below;
            <br />
            <br />
            By using the Service, and each time that you do so, you are telling
            us that you understand, accept and are able to accept these terms
            and conditions and agree to be bound by them. If you do not accept
            or understand these terms and conditions you should not use or
            access the Service or any part of them. By using and accessing the
            Service you confirm that you have the necessary hardware, software
            and capability required and that you shall be and shall remain
            responsible for all fees due in respect thereof. We shall have no
            liability in relation to any hardware, software or other services
            required to make use of the Service.
            <br />
            <br />
            If you are under the age of 16 and do not understand these terms and
            conditions please ask a parent or guardian to explain their meaning
            to you.
            <br />
            We may make alterations to these terms and conditions from time to
            time and these variations shall become effective immediately upon
            being accessible from www.log.com/terms-and-conditions. We will use
            our reasonable efforts to notify you of any such changes, which will
            not apply to any earlier use of the Service or purchases of Games
            through the Service.
            <br />
            <br />
            Your continued use of the Website will be deemed acceptance of the
            updated or amended terms and these variations shall become effective
            immediately upon being accessible. If you do not agree to the
            changes, you should cease using the Service. If there is any
            conflict between these terms and specific local terms appearing
            elsewhere on the Service then these terms shall prevail.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6' id='anchor2'>
            2. REGISTRATION, ACCOUNT AND PASSWORD
          </Typography>
          <span>
            In order to use and access the Service you will need to register. To
            register you will need to submit certain information and choose a
            user name and a password.
            <br />
            <br />
            The user name and password chosen by and/or issued to you for the
            purpose of accessing the Service is personal to you so that you can
            use and access the Service and must not be disclosed to any person
            without our prior written consent. <br />
            <br />
            You agree, accept and understand that:
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                We consider one account per individual / household as 'fair
                use', and reserve the right to ban (deactivate) any user who is
                in possession of more than one/multiple accounts;
              </span>
            </li>
            <li>
              <span>
                You must ensure that all information held about you by us is up
                to date;
              </span>
            </li>
            <li>
              <span>
                You can amend your registration details at any time through the
                Service (as appropriate);
              </span>
            </li>
            <li>
              <span>
                You are and shall remain solely responsible for maintaining the
                confidentiality of your user name and password; and
              </span>
            </li>
            <li>
              <span>
                You are solely liable for any use of the Service using your
                username and password whatsoever.
              </span>
            </li>
          </ul>
          <span>
            <br />
            When you create a Abstraction account, your profile will be set for
            'Public' view. This means that other users will be able to view any
            game reviews you write and the games you own or have added to your
            Want List. In addition, if you choose to link your Steam account to
            your Abstraction account, other users will be able to view your
            gameplay data including top played games and game activity. If you
            prefer not to share this information, you can change your profile to
            'Private' within the 'Settings' tab in 'My profile'.
            <br />
            <br />
            DO NOT SHARE YOUR USERNAME OR PASSWORD WITH ANY OTHER PERSON OR
            ALLOW ANY OTHER PERSON TO USE YOUR ACCOUNT. WE ARE NOT LIABLE FOR
            ANY IMPROPER USE OF YOUR USER NAME, PASSWORD, OR ACCOUNT OR ANY USE
            BY ANY THIRD PARTY. IF YOU THINK YOUR USER NAME, PASSWORD, OR
            ACCOUNT HAVE BEEN COMPROMISED IN ANY WAY YOU MUST INFORM US
            IMMEDIATELY.
            <br />
            <br />
            You undertake that all the information supplied during registration
            is truthful, complete and correct. If the information you have
            supplied is incomplete or incorrect you agree to indemnify
            (compensate) us against any loss or damage incurred by us and/or any
            third parties who may suffer damage as a result of the information
            that you have supplied.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6' id='anchor3'>
            3. RIGHTS OF USE AND INTELLECTUAL PROPERTY RIGHTS
          </Typography>
          <span>
            Subject to these terms and conditions and your compliance with them,
            we grant you a non-exclusive, non-transferable, personal, limited
            license to access and use the Service solely for your private,
            non-commercial, personal use only.
            <br />
            <br />
            This license includes the limited right to download content,
            materials, data and communications temporarily, for purposes solely
            connected with the private, non-commercial, personal use of the
            Service and the right to download, install and use the Apps in
            accordance with these terms and conditions and any applicable end
            user licence agreement. <br />
            <br />
            You may not transfer, sub license or deal in this right without our
            prior written permission. <br />
            <br />
            These terms and conditions and the rights granted by them do not
            give you any title or rights of ownership in any part of the Service
            and should not be deemed a sale or transfer of any copyright or
            other intellectual property rights subsisting in it.
            <br />
            <br />
            Unless otherwise expressly specified, all copyright, design rights,
            database right, patent rights, trademark and trade dress rights and
            other intellectual property rights in the Service (in any part of
            the world, whether registered or unregistered) belong to and vest in
            us, or are licensed by us (as appropriate). All our intellectual
            property rights are hereby asserted and reserved.
            <br />
            <br />
            All third party trade names and trademarks are the property of their
            respective owners and we make no warranty or representation in
            relation to them. We do not claim or assert any right title or
            interest in any third party Communications.
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6' id='anchor4'>
            4. RESTRICTIONS AND OBLIGATIONS
          </Typography>
          <span>
            You agree to comply with all rules applicable to the use of the
            Games purchased or otherwise obtained through the Service including
            but not limited to the applicable Game EULAs.
            <br />
            <br />
            Notwithstanding any other provision of these terms and conditions
            you agree and undertake not to: <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                Hack, attempt to hack, modify, adapt, merge, translate,
                decompile, disassemble, reverse engineer or create derivative
                works out of the Service or any part of them (save to the extent
                which expressly cannot be prohibited in accordance with
                applicable mandatory law in your jurisdiction);
              </span>
            </li>
            <li>
              <span>
                Remove, disable, modify, add to or tamper with any program code
                or data, copyright, trademark or other proprietary notices and
                legends contained on or in the Service;
              </span>
            </li>
            <li>
              <span>
                Create software which mimics any data or functionality in the
                Service;
              </span>
            </li>
            <li>
              <span>
                Use or deal in the Service except as permitted by these terms
                and conditions;
              </span>
            </li>
            <li>
              <span>
                Include contact details intended to enable communication outside
                of the Service, in any Communication;
              </span>
            </li>
            <li>
              <span>
                Use your access to the Service, or information gathered from it,
                for the sending of unsolicited bulk email;
              </span>
            </li>
            <li>
              <span>
                Make any public, business or commercial use of the Service or
                any part of them;
              </span>
            </li>
            <li>
              <span>
                Provide hypertext links, URL Links, graphic links, hyperlinks or
                other direct connection for profit or gain to the Service
                without our prior written permission;
              </span>
            </li>
            <li>
              <span>
                Make the Service or any part of it available to any third party
                (please note this does not stop you from fairly and honestly
                providing links to the Website or Apps, or showing either to
                other people);
              </span>
            </li>
            <li>
              <span>
                Use or process the Service or any part of them unfairly or for
                any illegal or immoral purpose; or
              </span>
            </li>
            <li>
              <span>
                Delete or obscure any copyright or other proprietary notice on
                the Service.
              </span>
            </li>
          </ul>
          <span>
            <br />
            The Service may only be accessed and used via authorized servers.
            You must take no action to bypass authorized servers and/or use
            third party software to modify any aspect of the Service, whether
            for the purpose of securing an unfair advantage over other users in
            a Game or otherwise, and you expressly consent to our monitoring
            your computer's random access memory for the purpose of identifying
            said unauthorized third party programs.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6' id='anchor5'>
            5. FORUM AND COMMUNICATIONS
          </Typography>
          <span>
            The Service consists of an online digital distribution, gaming and
            entertainment service and ancillary to this we are involved in the
            transmission, storage, retrieval and dealing with third party
            Communications without review, selection or alteration of their
            content - for which the Service is a mere conduit. <br />
            <br />
            The views expressed in any Communications are the views of the
            individual authors and not those of us unless specified otherwise by
            us. We are not responsible for and disclaim all liability in respect
            of any comments, views or remarks expressed in any Communications.
            By using the Service you acknowledge that we have no responsibility
            to review the content of any Communications and that all
            Communications are made available on the basis that we are not
            required to and do not exercise any control or judgement of the
            content. Notwithstanding the foregoing we shall be entitled to
            remove or reject any Communications and remove or suspend your
            ability to make or access Communications.
            <br />
            <br />
            You agree that we may use, publish, edit, modify and adapt your
            Communications for any and all purposes relating to the Service and
            our business and you hereby grant us an irrevocable, sub-licensable,
            transferrable, unrestricted non-exclusive right and licence and all
            necessary permissions, consents and licences required for us to use
            your Communications in that way, including without limitation your
            profile and the content of your posts through the Service and the
            publication of your user name and profile on any leader-board
            feature that we may include via the Service from time to time. You
            further waive all so called moral rights in your Communications.
            <br />
            <br />
            You agree and undertake that you will not make any Communication or
            post to or transmit to the Service any statement or material, nor
            use the Service in any way that:
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                Encourages any violation of these terms and conditions;
              </span>
            </li>
            <li>
              <span>
                Is abusive, seditious, pornographic, aggressive, homophobic,
                defamatory, libellous, untrue, hateful, discriminatory, obscene,
                inflammatory or racist;
              </span>
            </li>
            <li>
              <span>
                Is unlawful, malicious, misleading, discriminatory or which
                gives rise to civil or criminal liability or which might call us
                or the Service into disrepute;
              </span>
            </li>
            <li>
              <span>Promotes any illegal or unlawful activity;</span>
            </li>
            <li>
              <span>
                Infringes any copyright or other intellectual property right of
                any third party or assists such infringement or piracy;
              </span>
            </li>
            <li>
              <span>
                Is technically harmful such as the introduction of any computer
                virus, worms, logic bombs or other malicious software or
                technically harmful data or otherwise attempts to or actually
                does modify or interfere with the Service or overburden or
                disrupt any computer or server used by the Service;
              </span>
            </li>
            <li>
              <span>Harasses, bullies or intimidates any person;</span>
            </li>
            <li>
              <span>
                Markets or promotes any third party or may be deemed a marketing
                or commercial communication;
              </span>
            </li>
            <li>
              <span>
                Interferes with another user's use and enjoyment of the Service;
              </span>
            </li>
            <li>
              <span>
                Impersonates any moderator, administrator or any staff or other
                persons connected with GMGL;
              </span>
            </li>
            <li>
              <span>
                Infringes upon or violates any third party's rights, including
                but not limited to intellectual property rights, rights of
                privacy, including unauthorized disclosure of a person's name,
                e-mail address, physical address or phone number, and/or rights
                of publicity;
              </span>
            </li>
            <li>
              <span>
                Includes restricted and/or password protected content or
                materials;
              </span>
            </li>
            <li>
              <span>Exploits any other person;</span>
            </li>
            <li>
              <span>
                Is disruptive or offensive or is just generally mean-spirited
                such as including spoilers;
              </span>
            </li>
            <li>
              <span>Solicits passwords or personal information;</span>
            </li>
            <li>
              <span>
                Provides instructional information about illegal activities such
                as making or buying illegal weapons, buying or selling illegal
                drugs, violating someone's privacy, or providing or creating
                computer viruses;
              </span>
            </li>
            <li>
              <span>
                Contains video, photographs, or images of another person without
                his or her permission (or in the case of a minor, the minor's
                legal guardian);
              </span>
            </li>
            <li>
              <span>
                Tries to gain unauthorized access to any computer, servers or
                any part of the Service including its servers, network and the
                computers of other users;
              </span>
            </li>
            <li>
              <span>
                Tries to gain unauthorized access to any profiles, blogs,
                forums, communities, account information, bulletins, or other
                aspects of the Service;
              </span>
            </li>
            <li>
              <span>
                Engages in or solicits commercial activities or sales without
                our prior written consent such as, without limitation gambling,
                betting, sweepstakes, sales advertising, investments and pyramid
                schemes;
              </span>
            </li>
            <li>
              <span>Refers to any material that is inappropriate;</span>
            </li>
            <li>
              <span>
                Seeks or attempts to make any arrangement to meet a child under
                the age of 16 or which may have such a meeting as its object or
                effect;
              </span>
            </li>
            <li>
              <span>
                Contains any restricted material, including but not limited to
                passwords, medical information or confidential information of
                any person; or
              </span>
            </li>
            <li>
              <span>
                Solicits, invites, encourages, advocates, incites or provokes
                any or all of the foregoing.
              </span>
            </li>
          </ul>
          <span>
            <br />
            If you discover any material which you believe contravenes these
            terms and conditions please inform either us or a forum moderator
            with details of the page you found it on by contacting us through
            our Customer Support page.
            <br />
            <br />
            It is a known risk of Internet usage that people are not necessarily
            who they say they are. People may provide information or behave in a
            way that is unreliable, misleading, unlawful or illegal. We have no
            way of telling if statements made by other users are true. This is a
            decision that can only be made by you. You should therefore exercise
            some degree of caution when using any website. By using any part of
            the Service you accept that this is the case and accept that you
            therefore use the Service at your own risk (subject to your
            mandatory consumer rights). PLEASE TAKE PARTICULAR CARE IN RELATION
            TO THE DISCLOSURE OF YOUR OWN PERSONAL INFORMATION SUCH AS YOUR
            SURNAME, ADDRESS, EMAIL ADDRESS, TELEPHONE NUMBER AND PLACES YOU GO.{' '}
            <br />
            <br />
            You acknowledge and agree that, if necessary, we will communicate
            with you via the email address you have provided to us. Notices that
            are applicable to all our customers shall be made available on the
            Websites or otherwise via the Service. You will be deemed to have
            received a notice at the time the email is sent or within 14 days of
            the time the notice is posted on the Website or otherwise within the
            Service.
            <br />
            <br />
            All emails or other communications sent by us and attachments
            thereto are intended for the addressee only.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6' id='anchor6'>
            6. LIABILITY
          </Typography>
          <span>
            This clause applies to your use of the Service, but not to any
            Products (as defined in Section 8 below) which you purchase through
            the Service.
            <br />
            <br />
            GMGL provides and maintains the Service for personal entertainment
            on an “as is“ basis and is liable only to provide its services with
            reasonable skill and care.
            <br />
            <br />
            External Sites have not been verified or reviewed by us and all use
            and access of External Sites is made at your own risk. “External
            Sites” means third party web sites and online services to which the
            Service links. GMGL gives no other warranty in connection with the
            Service and to the maximum extent permitted by law, GMGL excludes
            liability for:
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                Any loss or damage of any kind howsoever arising, including any
                direct, indirect, special, punitive or consequential loss
                whether or not such arises out of any problem which We have been
                made aware of;
              </span>
            </li>
            <li>
              <span>
                The accuracy, currency or validity of information and material
                contained within any Communications or the Service;
              </span>
            </li>
            <li>
              <span>
                Any interruptions to or delays in updating the Service;
              </span>
            </li>
            <li>
              <span>
                Any incorrect or inaccurate information on the Service;
              </span>
            </li>
            <li>
              <span>
                The infringement by any person of any copyright or other
                intellectual property rights of any third party through any
                Communication or use of the Service;
              </span>
            </li>
            <li>
              <span>
                the availability, quality, content or nature of External Sites;
              </span>
            </li>
            <li>
              <span>any transaction involving External Sites;</span>
            </li>
            <li>
              <span>
                any amount or kind of loss or damage due to viruses or other
                malicious software that may infect a user's computer equipment,
                software, data or other property caused by persons accessing,
                using or downloading the Service, or any Communication (save
                that, where digital content supplied to you by us or on our
                behalf through the Service causes damage to your digital content
                or devices you may be entitled to compensation or repair or
                replacement, in which case please let us know); and
              </span>
            </li>
            <li>
              <span>
                all representations, warranties, conditions and other terms and
                conditions which but for this notice would have effect.
              </span>
            </li>
          </ul>
          <span>
            <br />
            We do not warrant that the operation of the Service will be
            uninterrupted or error free.
            <br />
            <br />
            We will not be liable in any amount for failure to perform any
            obligation under this agreement if such failure is caused by the
            occurrence of any unforeseen contingency beyond our reasonable
            control including Internet outages, communications outages, fire,
            flood, war or act of God. <br />
            <br />
            Except as provided above there are no other warranties, conditions
            or other terms and conditions, express or implied, statutory or
            otherwise, and all such terms and conditions are hereby excluded to
            the maximum extent permitted by law.
            <br />
            <br />
            You agree that in relation to your use of the Service you will not
            in any way conduct yourself in a manner which is unlawful or which
            gives rise to civil or criminal liability or which might call us or
            the Service into disrepute.
            <br />
            <br />
            You agree that you are and shall remain responsible for maintaining
            the confidentiality of your password and username and for all
            activities that occur under your account.
            <br />
            <br />
            You hereby indemnify (agree to compensate), defend and hold us and
            our officers, directors, owners, agents, information providers,
            affiliates, licensors and licensees (collectively, the "Indemnified
            Parties") harmless from and against any and all liability and costs
            (including reasonable attorney's fees) incurred by the Indemnified
            Parties in connection with any claim arising out of any breach by
            you of these terms and conditions or claims arising from your use of
            the Service, or any of your Communications, or any use of your user
            account. You shall use your best efforts to cooperate with us in the
            defence of any claim. We reserve the right, at our own expense, to
            assume the exclusive defence and control of any matter otherwise
            subject to indemnification by you.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6' id='anchor7'>
            7. TERMINATION
          </Typography>
          <span>
            Without limiting any other rights that we may have, we may remove,
            restrict, cancel or suspend access to and/or use of the Service and
            any part of it, if we consider (in our sole discretion) that you
            have breached any of these terms and conditions.
            <br />
            <br />
            You may also terminate your agreement with us by ceasing to access
            the Service, deleting all copies of the Service or part thereof
            within your control. Termination shall not affect any rights or
            remedies which have accrued up to the time of termination.
          </span>
        </Container>
      </Box>
      <Box className='policies-container-2'>
        <Container>
          <Typography variant='h6' id='anchor8'>
            8. PURCHASES
          </Typography>
          <span>
            You may purchase Games, and Gift Cards (together, the “Products”)
            through the Service as follows:
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                Our shopping pages will guide you through the steps you need to
                take to place an order for a Product (“Order”) with us.
                &nbsp;Our order process allows you to check and amend any errors
                before submitting your order to us. Please take the time to read
                and check your Order at each stage of the order process.
              </span>
            </li>
            <li>
              <span>
                When you place an Order this will be deemed an offer by you to
                buy the Product(s) for the price stated, subject to these terms
                and conditions.
              </span>
            </li>
            <li>
              <span>
                After you have submitted your Order GMGL will send you an e-mail
                to confirm that it has received it. &nbsp;This email
                confirmation will be produced automatically so that you have
                confirmation of your Order details. The fact that you receive an
                automatic confirmation does not mean GMGL has accepted your
                Order or that it will be able to meet your Order.
              </span>
            </li>
            <li>
              <span>
                Where you have incorrectly submitted an Order, please contact us
                as soon as reasonably possible at
              </span>
              <Link className='cookie-ref' to='mailto:bcn123@gmail.com'>
                <span> bcn123@gmail.com</span>
              </Link>
              <span>.</span>
            </li>
          </ul>
          <span>
            <br />
            If the payment confirmation for a purchase is delayed (ie payments
            with Boacompra, Unionpay, Alipay) the order will be fulfilled with a
            version of the game as advertised at the point of payment
            confirmation.
            <br />
            <br />
          </span>
          <ul>
            <li>
              <span>
                Once GMGL has sent the confirmation email GMGL will (if the
                Product is available) either: (i) make the Game available
                (either for download by you or otherwise); (ii) credit your user
                account or the user account specified by you with the value of a
                Gift Card; or (iii) send, or make available for you to send, the
                relevant Gift Card to the individual of your choosing,
                electronically or otherwise as described to you when placing
                your Order (please note that the ultimate recipient of a Gift
                Card will need to register for an account with GMGL in order to
                redeem it); and a binding contract will exist between you and us
                in respect of your Order once any of the foregoing events occur.
              </span>
            </li>
            <li>
              <span>
                If GMGL are unable to supply you with a Product for any reason
                we will inform you of this by email or otherwise through the
                Service, and we will not process your Order. &nbsp;If you have
                already paid for the Product(s), GMGL will refund you the full
                amount, including any delivery costs charged, as soon as
                possible.
              </span>
              &nbsp;
            </li>
          </ul>
          <span>
            <br />
            The use and purchase of all Games purchased or downloaded through
            the Service shall be subject to the Game EULA (see Section 24
            below), which shall be deemed incorporated into any purchase, and by
            purchasing or downloading or using any Game you are deemed to accept
            that Game EULA.
            <br />
            <br />
            ATTEMPTED PURCHASES OR DOWNLOADS VIA THE SERVICE WILL BE ADVERSELY
            AFFECTED AND MAY NOT WORK AT ALL IF YOU ARE USING A VPN (“VIRTUAL
            PRIVATE NETWORK”), A PROXY SERVER OR SIMILAR TECHNOLOGY. ANY SUCH
            PURCHASES MAY NONETHELESS BE CHARGED AS PART OF THE ORDER PROCESS.
            IF THIS HAPPENS TO YOU, PLEASE SEE BELOW FOR INFORMATION REGARDING
            YOUR RIGHT TO CANCEL OR CHANGE YOUR MIND.{' '}
          </span>
        </Container>
      </Box>
      <Box className='policies-container-1'>
        <Container>
          <Typography variant='h6' id='anchor9'>
            9. PRICE AND PAYMENT
          </Typography>
          <ul>
            <li>
              <span>Payment is due from the moment an Order is accepted.</span>
            </li>
            <li>
              <span>
                Payment may be made as set out on the payment page of the
                Service, by credit card, debit card or any other such method as
                GMGL may introduce in its sole discretion.
              </span>
            </li>
            <li>
              <span>
                GMGL aims to debit money from your account within three (3)
                working days after receiving your Order.
              </span>
            </li>
            <li>
              <span>
                GMGL reserves the right to accept or refuse any payment made in
                any form.
              </span>
            </li>
            <li>
              <span>
                Prices are quoted in UK Pounds, Euros, US Dollars, Canadian
                Dollars, Australian Dollars, Rubles , Indian Rupees, Argentinian
                Peso, Brazilian Reals, Chilean Peso, Chinese Yuan, Colombian
                Peso, South Korean Won, Mexican Peso, Malaysian Ringgit,
                Peruvian Nuevo Sol, Philippine Peso, Turkish Lira depending on
                your geographical location. You will be charged in the currency
                in which the price is quoted .
              </span>
            </li>
          </ul>
          <span>
            <br />
            If you do not hold an account in the relevant currency you should
            pay by debit or credit card (or any other method that GMGL may
            introduce from time to time) and your card company should exchange
            the amount charged to the currency of your country at the current
            rate. Please note that you are responsible for paying any currency
            exchange, or other payment charges.
            <br />
            <br />
            You will not be charged for any Orders that cannot be fulfilled and,
            where appropriate, GMGL will re-credit to your account any sum
            debited by GMGL. GMGL cannot guarantee that a particular Product
            will always be available.
            <br />
            <br />
            Credit/debit card details will be encrypted to minimise the
            possibility of someone being able to read them as they are sent over
            the Internet. Please refer to the Service{' '}
            <Link className='cookie-ref' to='/policies/private-policy'>
              Private Policy
            </Link>{' '}
            regarding use of your data (including credit card data) in section
            20 below.
            <br />
            <br />
            Your credit card company may also do security checks to confirm it
            is you making the Order.{' '}
          </span>
          <br />
          <Button
            variant='contained'
            component={Link}
            to='/policies'
            sx={{
              mt: 1,
              transition: 'all 0.5s ease',
              backgroundColor: '#fe59d7',
              border: '1px solid #fe59d7',
              color: 'white',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#fe59d7',
                boxShadow: 0,
              },
            }}
          >
            Back to policies
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default TermsConditions;
