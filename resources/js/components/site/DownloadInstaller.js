import ReactDOM from 'react-dom';
import React from 'react';

function DownloadInstaller() {

    async function download() {
        const request = await fetch('https://api.github.com/repos/flybywiresim/installer/releases?per_page=1');
        const reqJson = await request.json();

        return reqJson[0].assets[0].browser_download_url;
    }

    const downloadLink = download().then(r => r);

    return (
        <a href={downloadLink}>
            <button className="btn btn-lg btn-primary rounded-pill" type="button">Download</button>
        </a>
    )
}

const container = document.getElementById('download-installer');

if (container) {
    ReactDOM.render(<DownloadInstaller/>, container);
}
