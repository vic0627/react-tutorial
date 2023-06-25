import { useId } from "react";
// `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

const PasswordField = () => {
    const id = useId();

    return (
        <>
            <label>
                Password:
                <input type="password" aria-describedby={id} />
            </label>
            <p id={id}>The password should contain at least 18 characters.</p>
        </>
    );
};

const HooksUseId = () => {
    return (
        <>
            <h2>Choose password</h2>
            <PasswordField />
            <h2>Confirm password</h2>
            <PasswordField />
        </>
    );
};

export default HooksUseId;
