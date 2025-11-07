import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css"

export function Footer() {
    return <footer className={styles.footer}>
        <RouterLink href="/about-pomodoro">Entenda a técnica Pomodoro.</RouterLink>
        <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️</a>
    </footer>;
}