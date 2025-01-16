# Quizlet JSON Downloader

A Firefox extension that adds a download button to Quizlet sets, allowing you to save the terms and definitions as JSON.

## Installation

1. Clone this repository or download the files
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Open any file of the repository

## Usage

1. Navigate to any Quizlet set page
2. Click see more at the bottom to load all terms
3. Click the "Download JSON" button at the top of the page
4. The set will be downloaded as `quizlet-set.json`

## Output Format

The downloaded JSON file will have the following structure:

```json
[
  {
    "term": "Example term",
    "definition": "Example definition"
  },
  ...
]
```
