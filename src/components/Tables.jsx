import {
  epochConverted,
  translatedTweets,
  nlpTSL,
  commonWords,
  hashtags,
} from "./data";

export function DateScaleTable() {
  // Make a table from the data in epochConverted where the first column is "Original date posted" and the second column is "Epoch"

  return (
    <div>
      <table>
        <tr>
          <th>Epoch</th>
          <th>Original Date Posted</th>
        </tr>
        {epochConverted.slice(0,4).map((row) => (
          <tr>
            <td>{row["Original date posted"]}</td>
            <td>{row.Epoch}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export function TranslatedTweetsTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Original</th>
          <th>Google Translated</th>
          <th>Manually Translated</th>
        </tr>
        {translatedTweets.slice(0,4).map((row) => (
          <tr>
            <td>{row["Original Text"]}</td>
            <td>{row["Manual Translated"]}</td>
            <td>{row["Google Translated"]}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export function CommonWordsTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Word</th>
          <th>Count</th>
        </tr>
        {commonWords.slice(0,5).map((row) => (
          <tr>
            <td>{row.Word}</td>
            <td>{row.Count}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export function NLPTSLTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Original</th>
          <th>Tokenized</th>
          <th>Stemmed</th>
          <th>Lemmatized</th>
        </tr>
        {nlpTSL.slice(0,2).map((row) => (
          <tr>
            <td>{row["Original"]}</td>
            <td>{row["Tokenized"]}</td>
            <td>{row["Stemmed"].join(", ")}</td>
            <td>{row["Lemmatized"].join(", ")}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export function HashtagsCountTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Hashtag</th>
          <th>Count</th>
        </tr>
        {hashtags.slice(0,5).map((row) => (
          <tr>
            <td>{row.Hashtag}</td>
            <td>{row.Count}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
