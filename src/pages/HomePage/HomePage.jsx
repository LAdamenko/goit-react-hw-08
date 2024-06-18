import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to contact book </h1>
      <p className={css.text}>Manage contacts conveniently</p>
    </div>
  );
}
