import * as React from 'react';
import '../styles/app.scss';

interface IHelloProps {
    framework: string;
}

export const Hello = (props: IHelloProps) => (
    <div className="app">
        <h1>
            Hello from {props.framework}
        </h1>
    </div>
)
