import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({onAdd, showAddTask}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            {location.pathname === '/' && <Button onClick={onAdd}  color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} /> }
        </header>
    )    
}

export default Header