import { renderToString } from 'react-dom/server';
import nodemailer from 'nodemailer';

import { InviteEmailTemplate, previewProps } from './emails/InviteEmail.tsx';

(async () => {
  const html = renderToString(<InviteEmailTemplate />);
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
    html,
  });
})();
