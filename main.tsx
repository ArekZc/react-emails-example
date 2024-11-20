import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';

import { InviteEmailTemplate } from './emails/InviteEmail';

      const email = renderToString(
        <InviteEmailTemplate
          username="Bob"
          userImage="🦸"
          invitedByUsername="Arthur"
          invitedByEmail="arthur@kingarthur.com"
          teamName="Arthur"
          teamImage="⚔️"
          inviteLink="https://kingarthur.com/invite"
        />
      );

(async () => {
  const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: 'veda.prosacco81@ethereal.email',
      pass: '9SWWANvMzJ1nVRbBHm',
    },
  });

  await transport.sendMail({
    from: 'penguin@joker.us',
    to: 'bruce@wayneinc.com',
    subject: 'Did you get that thing I sent you?',
    html: email,
  });


})();
