import React from 'react';

interface InviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = 'https://jsx.email/assets/demo/';

export const templateName = 'Invite User';

export const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 'auto',
    backgroundColor: '#FFF'
  },
  main: {
    margin: '40px auto 40px',
    width: '465px',
    padding: '20px',
    backgroundColor: 'whitesmoke',
    borderTopWidth: '1px',
    borderBottomWidth: '0px',
    borderRadius: '.25rem',
    borderWidth: '1px',
    borderColor: '#eaeaea'
  },
  topSection: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px'
  },
  logo: {
    margin: '0 auto',
    width: '60px',
    height: '60px',
    fontSize: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    margin: '30px 0',
    textAlign: 'center',
    fontSize: '24px'
  },
  text: {
    fontSize: '14px',
    lineHeight: '24px'
  },
  link: {
    textDecorationLine: 'none',
    color: 'rgb(37 99 235)'
  },
  transfer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
    justifyContent: 'center'
  },
  circle: {
    borderRadius: '9999px',
    width: '64px',
    height: '64px',
    backgroundColor: '#eaeaea',
    fontSize: '42px',
    display: 'flex',
    lineHeight: '22px',
    alignItems: 'center',
    justifyContent: 'center'
  },
  invite: {
    margin: '32px 0',
    textAlign: 'center'
  },
  inviteButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '16px 12px',
    textDecoration: 'none'
  },
  separator: {
    margin: '0 26px',
    width: '100%',
    border: '1px solid #eaeaea'
  }
}

export const InviteEmailTemplate = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
}: InviteUserEmailProps) => {
  return (
    <html>
      <head />
      <body style={styles.body}>
        <main style={styles.main}>
          <section style={styles.topSection}>
            <div style={styles.logo}>🧙‍♂️</div>
          </section>
          <header style={styles.header}>
            Join <strong>{teamName}</strong> on <strong>Merlin Academy</strong>
          </header>
          <p style={styles.text}>
            Hello {username},
          </p>
          <p style={styles.text}>
            <strong>{invitedByUsername}</strong> (
            <a
              href={`mailto:${invitedByEmail}`}
              style={styles.link}
            >
              {invitedByEmail}
            </a>
            ) has invited you to the <strong>{teamName}</strong> team on{' '}
            <strong>Merlin Academy</strong>.
          </p>
          <section>
            <div style={styles.transfer}>
              <div>
                <div
                  style={{...styles.circle, backgroundColor: 'lightseagreen'}}
                >{userImage}</div>
              </div>
              <div>
                <img
                  src={`${baseUrl}vercel-arrow.png`}
                  width="12"
                  height="9"
                  alt="invited you to"
                />
              </div>
              <div>
                <div
                  style={{...styles.circle, backgroundColor: 'lightblue' }}>{teamImage}</div>
              </div>
            </div>
          </section>
          <section style={styles.invite}>
            <a style={styles.inviteButton} href={inviteLink}>
              Join the team
            </a>
          </section>
          <p style={styles.text}>
            or copy and paste this URL into your browser:{' '}
            <a href={inviteLink} style={styles.link}>
              {inviteLink}
            </a>
          </p>
          <hr style={styles.separator} />
          <p style={styles.text}>
            This invitation was intended for{' '}
            <strong>{username} </strong>. If you
            were not expecting this invitation, you can ignore this email. If
            you are concerned about your account's safety, please reply to this
            email to get in touch with us.
          </p>
        </main>
      </body>
    </html>
  );
};
