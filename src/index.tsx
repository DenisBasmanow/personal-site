/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.css';
import IndexPage from './pages/IndexPage/IndexPage';
import {title_emojis} from './config';


render(
    () => (
        <Router>
        <Routes>
            <Route path="/" element={<IndexPage emojis={title_emojis} />} />
            <Route path="/secret" element={<h1>Tss..</h1>} />
        </Routes>
        </Router>
    ),
    document.getElementById('root')!
);
