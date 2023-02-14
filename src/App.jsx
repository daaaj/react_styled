import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';

function App() {
    return (
        <>
            <Button></Button>
            <Input></Input>
            <Modal style={{ 'z-index': 999 }}></Modal>
            <Select style={{ 'z-index': 100 }}></Select>
        </>
    );
}

export default App;
