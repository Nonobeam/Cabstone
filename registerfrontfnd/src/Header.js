import React from "react";
let renderCount = 0;

export default () => {
    renderCount++;

    return (
        <div style={{ marginBottom: 10 }}>
            <span className="counter">Render Count: {renderCount}</span>
            <h1 className="h1">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDMiIGhlaWdodD0iMjAyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PHBhdGggZD0iTTE1Ny45OTUgOC41YzEwLjA4IDAgMTkuMjA2IDQuMDg3IDI1LjgxMiAxMC42OTJTMTk0LjUgMzQuOTI0IDE5NC41IDQ1LjAwM2gwdjExMS45OTRjMCAxMC4wOC00LjA4NiAxOS4yMDYtMTAuNjkyIDI1LjgxMmEzNi4zOSAzNi4zOSAwIDAgMS0yNS44MTMgMTAuNjkxaDAtMTEyLjk5Yy0xMC4wOCAwLTE5LjIwNi00LjA4Ny0yNS44MTItMTAuNjkyUzguNSAxNjcuMDc2IDguNSAxNTYuOTk3aDBWNDUuMDAzYzAtMTAuMDggNC4wODYtMTkuMjA2IDEwLjY5Mi0yNS44MTJBMzYuMzkgMzYuMzkgMCAwIDEgNDUuMDA1IDguNWgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjE3IiBmaWxsPSIjZWM1OTkwIi8+PHBhdGggZD0iTTEzMy4zODUgNTEuNjA0aC0yMC44NjhjLTEuNTMtNC43NjYtNS45ODEtOC4wMDEtMTEuMDA5LTguMDAxcy05LjQ3OSAzLjIzNS0xMS4wMDkgOC4wMDFINjkuNjE2Yy04LjIyMiAwLTE0Ljg4NyA2LjYzMi0xNC44ODcgMTQuODEzdjc3LjE3N2MwIDguMTgxIDYuNjY1IDE0LjgxMyAxNC44ODcgMTQuODEzaDYzLjc2OWM4LjIyMiAwIDE0Ljg4Ny02LjYzMiAxNC44ODctMTQuODEzVjY2LjQxN2MwLTguMTgxLTYuNjY1LTE0LjgxMy0xNC44ODctMTQuODEzaDB6TTkxLjU0IDU0LjI5N2ExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4wNjRjLjg4Ni00LjA0NiA0LjQ4Ni02LjkzMiA4LjY0OC02LjkzMnM3Ljc2MiAyLjg4NSA4LjY0OCA2LjkzMmExLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4wNjRoNy4yODF2OC44MjFjMCAyLjIzMS0xLjgxOCA0LjA0LTQuMDYgNC4wNEg4OC4zMDVjLTIuMjQyIDAtNC4wNi0xLjgwOS00LjA2LTQuMDR2LTguODIxaDcuMjk0em01NC4wMjUgODkuMjk3YzAgNi42OTQtNS40NTMgMTIuMTItMTIuMTggMTIuMTJINjkuNjE2Yy02LjcyNyAwLTEyLjE4LTUuNDI2LTEyLjE4LTEyLjEyVjY2LjQxN2MwLTYuNjk0IDUuNDUzLTEyLjEyIDEyLjE4LTEyLjEyaDExLjkyM3Y4LjgyMWMwIDMuNzE5IDMuMDMgNi43MzMgNi43NjcgNi43MzNoMjYuMzljMy43MzcgMCA2Ljc2Ny0zLjAxNSA2Ljc2Ny02LjczM3YtOC44MjFoMTEuOTIzYzYuNzI3IDAgMTIuMTggNS40MjYgMTIuMTggMTIuMTJ2NzcuMTc3em0tMTQuODMzLTQ3Ljk4MWgtMjMuODE5YTEuMzUgMS4zNSAwIDAgMC0xLjM1MyAxLjM0NyAxLjM1IDEuMzUgMCAwIDAgMS4zNTMgMS4zNDdoMjMuODE5YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NiAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjgxOWExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6bTM1LjI1NCAzMi41ODloLTIzLjg4NmExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3SDEzMC44YTEuMzUgMS4zNSAwIDAgMCAxLjM1My0xLjM0NyAxLjM1IDEuMzUgMCAwIDAtMS4zNTMtMS4zNDdoMHptLTM1LjE4NyAwSDcxLjcyN2ExLjM1IDEuMzUgMCAwIDAtMS4zNTMgMS4zNDcgMS4zNSAxLjM1IDAgMCAwIDEuMzUzIDEuMzQ3aDIzLjg4NmExLjM1IDEuMzUgMCAwIDAgMS4zNTMtMS4zNDcgMS4zNSAxLjM1IDAgMCAwLTEuMzUzLTEuMzQ3aDB6IiBmaWxsPSIjZmZmIi8+PC9zdmc+" />
                React Hook Form
            </h1>
            <p style={{ fontSize: 14, lineHeight: 1.3, marginBottom: 0 }}>
                Performant, flexible and extensible forms with easy-to-use validation.
            </p>
            <a
                className={"preact"}
                target="_blank"
                href="https://codesandbox.io/s/preact-2zsw6?file=/src/index.js"
                style={{
                    fontSize: 10,
                    height: 20
                }}
            >
                🐰 Show me the Preact version
            </a>
        </div>
    );
};
