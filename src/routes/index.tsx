import { Routes, Route } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='' element=''></Route>
            <Route path='' element=''></Route>
            <Route path='' element=''></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    )
}