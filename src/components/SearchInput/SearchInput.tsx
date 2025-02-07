import { ChangeEvent, FC } from 'react';
import styles from './SearchInput.module.css'

type Props = {
    setValue: (val: string) => void;
    count: number
}

const SearchInput:FC<Props> = ({setValue, count}) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

 return (
    <div className={styles.inputWrapper}>
        <input type="search" autoFocus placeholder="Search characters..." className={styles.input} onChange={handleInputChange}/>
        <div className={styles.result}>
            <span>Found characters: {count ? count : 0}</span>
        </div>
    </div>
 )
}

export default SearchInput