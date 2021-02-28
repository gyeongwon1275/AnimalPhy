import { FormContainer } from './style';

function PublicLayout({ children }) {
  return (
    <FormContainer className="form-container">
      <h1 className="logo">🐶 AnimalPhy</h1>
      {children}
    </FormContainer>
  );
}

export default PublicLayout;
