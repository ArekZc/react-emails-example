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

export const previewProps = {
  username: 'batman',
  userImage: `${baseUrl}batman-adam.jpg`,
  invitedByUsername: 'joker',
  invitedByEmail: 'joker@arkham.com',
  teamName: 'Batmobile',
  teamImage: `${baseUrl}vercel-team.png`,
  inviteLink: 'https://vercel.com/teams/invite/foo',
  inviteFromIp: '123.45.678.910',
  inviteFromLocation: 'Gotham City',
} as InviteUserEmailProps;

export const templateName = 'Invite User';

export const InviteEmailTemplate = ({
  username,
  userImage,
  invitedByUsername,
  invitedByEmail,
  teamName,
  teamImage,
  inviteLink,
  inviteFromIp,
  inviteFromLocation,
}: InviteUserEmailProps) => {
  return (
    <html>
      <head />
      <body className="mx-auto my-auto bg-white font-sans">
        <main className="mx-auto my-[40px] w-[465px] border-separate rounded border border-solid border-[#eaeaea] p-[20px]">
          <section className="mt-[32px]">
            <img
              src={`${baseUrl}vercel-logo.png`}
              width="40"
              height="37"
              alt="Vercel"
              className="mx-auto my-0"
            />
          </section>
          <header className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
            Join <strong>{teamName}</strong> on <strong>CompanyName</strong>
          </header>
          <p className="text-[14px] leading-[24px] text-black">
            Hello {username},
          </p>
          <p className="text-[14px] leading-[24px] text-black">
            <strong>{invitedByUsername}</strong> (
            <a
              href={`mailto:${invitedByEmail}`}
              className="text-blue-600 no-underline"
            >
              {invitedByEmail}
            </a>
            ) has invited you to the <strong>{teamName}</strong> team on{' '}
            <strong>CompanyName</strong>.
          </p>
          <section>
            <div className="flex flex-wrap">
              <div className="flex-1">
                <img
                  className="rounded-full"
                  src={userImage}
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex-1">
                <img
                  src={`${baseUrl}vercel-arrow.png`}
                  width="12"
                  height="9"
                  alt="invited you to"
                />
              </div>
              <div className="flex-1">
                <img
                  className="rounded-full"
                  src={teamImage}
                  width="64"
                  height="64"
                />
              </div>
            </div>
          </section>
          <section className="mb-[32px] mt-[32px] text-center">
            <a className="" href={inviteLink}>
              Join the team
            </a>
          </section>
          <p className="!text-[14px] leading-[24px] text-black">
            or copy and paste this URL into your browser:{' '}
            <a href={inviteLink} className="text-blue-600 no-underline">
              {inviteLink}
            </a>
          </p>
          <hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
          <p className="!text-[12px] leading-[24px] text-[#666666]">
            This invitation was intended for{' '}
            <span className="text-black">{username} </span>.This invite was sent
            from <span className="text-black">{inviteFromIp}</span> located in{' '}
            <span className="text-black">{inviteFromLocation}</span>. If you
            were not expecting this invitation, you can ignore this email. If
            you are concerned about your account's safety, please reply to this
            email to get in touch with us.
          </p>
        </main>
      </body>
    </html>
  );
};
