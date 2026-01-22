import '/App.css';
import { Card } from './components/Card';

export const App = () => {
  return (
    <>
      <h1>hello </h1>
      <div style={{ display: 'flex', gap: '10px', }}>
      <Card name={'pranay'} age={22} email={'pranayshinde872@example.com'} />
      <Card name={'viraj'} email={'viraj@example.com'} />

      <Card />
      </div>
      </>
  );
};