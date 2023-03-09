import { useLocation, Link } from "react-router-dom";
import styles from "./GoBackButton.module.css";
import Container from "../Container/Container";

const GoBackButton = () => {
  const location = useLocation();

  return (
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.linkBack} to={location?.state?.from ?? "/"}>
          GO BACK
        </Link>
      </div>
    </Container>
  );
};
export default GoBackButton;
