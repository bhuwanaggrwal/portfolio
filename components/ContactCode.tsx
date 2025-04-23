import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'bhuwangarg.com',
    href: 'https://bhuwangarg99.com',
  },
  {
    social: 'email',
    link: 'bhuwangarg99@gmail.com',
    href: 'mailto:bhuwangarg99@gmail.com',
  },
  {
    social: 'github',
    link: 'bhuwanaggrwal',
    href: 'https://github.com/bhuwanaggrwal',
  },
  {
    social: 'linkedin',
    link: 'bhuwan-garg-66b172251',
    href: 'https://www.linkedin.com/in/bhuwan-garg-66b172251/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
