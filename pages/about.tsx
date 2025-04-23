import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bhuwan Garg</h1>
        <div className={styles.subtitle}>Data Scientist</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I’m an aspiring Data Scientist with a passion for uncovering actionable insights from data. 
            </p>
            <p className={styles.paragraph}>
            With a strong foundation in statistics, Python programming, and machine learning, I specialize in transforming raw datasets into meaningful business solutions. 
            </p>
          </section>

          <section className={styles.section}>
            {/* <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Tessact</span> as
              Software Engineer 2, working with a lean team of 4 frontend
              engineers to build a next-gen video creation suite for the people
              of video.
            </p> */}
            <p className={styles.paragraph}>
            I enjoy solving real-world problems through data analysis, predictive modeling, and visualization.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, listen to calm piano music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
