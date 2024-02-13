import styles from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={styles.container}>Pagination
    <button className={styles.button} disabled>Previous</button>
    <button className={styles.button} disabled>Next</button>
    </div>
  )
}

export default Pagination;