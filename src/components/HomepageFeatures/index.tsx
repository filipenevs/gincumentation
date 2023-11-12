import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'High Performance',
    description: (
      <>
        It offers exceptional speed due to its minimalist design and Go's efficiency as a compiled language, ideal for handling heavy loads and fast response times.
      </>
    ),
  },
  {
    title: 'Ease of Use',
    description: (
      <>
        Gin provides a simple, clear API, making it user-friendly and less prone to errors, with a focus on essential features for a lightweight framework.
      </>
    ),
  },
  {
    title: 'Advanced Routing and Middleware',
    description: (
      <>
        It features powerful routing capabilities and supports flexible middleware, facilitating efficient implementation of functionalities like logging, authentication, and CORS.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
