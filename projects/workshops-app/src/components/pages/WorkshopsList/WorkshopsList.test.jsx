import WorkshopsList from "./WorkshopsList";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store';

test('should show a loading message when the component first renders', () => {
    // arrange, act
    render(
        <Provider store={store}>
            <BrowserRouter>
                <WorkshopsList />
            </BrowserRouter>
        </Provider>
    );

    // getBy*() /getAllBy*(), findBy*(), queryBy*()
    const loadingMessageEl = screen.getByTestId('loading-message');

    // assert/expectations
    expect(loadingMessageEl).toBeInTheDocument();
});