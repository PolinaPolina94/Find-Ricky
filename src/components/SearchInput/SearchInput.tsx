import styles from './SearchInput.module.css'

const SearchInput = () => {
    const resultCount = 8;
 return (
    <div className={styles.inputWrapper}>
        <input type="search" autoFocus placeholder="Search characters..." className={styles.input}/>
        <div className={styles.result}>
            <span>Found characters: {resultCount}</span>
        </div>
    </div>
 )
}

export default SearchInput