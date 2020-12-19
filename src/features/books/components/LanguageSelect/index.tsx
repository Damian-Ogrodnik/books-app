import { ChangeEvent } from 'react';

interface BooksListProps {
  handleChange(e: ChangeEvent<HTMLSelectElement>): void;
}

export const LanguageSelect: React.FC<BooksListProps> = ({ handleChange }) => (
  <label htmlFor="bookLanguage">
    Choose a language:
    <select name="bookLanguage" onChange={handleChange}>
      <option value="pl">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </label>
);
