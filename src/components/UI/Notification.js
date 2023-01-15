import classes from './Notification.module.css';

const Notification = (props) => {
  const { status, title, message } = props;
  return (
    <section className={`${classes.notification} ${classes[status]}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
