// npm install lucide-react
import { useState } from 'react';
import { Check, X, ChevronRight, RotateCcw } from 'lucide-react';

// 問題データ（JSXを含めず、文字列などの基本データのみで構成してLintエラーを防止）
const quizData = [
  {
    id: 1,
    title: "問題 1 ファイルの分類",
    question: "コンピュータのファイルに関する記述として、最も不適切なものはどれか。",
    options: [
      { id: "ア", text: "マスタファイルは、プログラムファイルの１つであり、商品情報を管理する商品マスタや得意先情報を管理する得意先マスタなど、台帳のような情報を格納する。" },
      { id: "イ", text: "トランザクションファイルとは、売上履歴のような取引を記録し、取引の度にデータが追加・更新される。" },
      { id: "ウ", text: "テキストファイルは、文字データが格納されており、テキストエディタで開いて編集することができる。" },
      { id: "エ", text: "バイナリファイルは、2進数で表現されたデータを格納しているファイルであり、画像や音声などのデータはバイナリファイルとして保存されている。" }
    ],
    answer: "ア",
    [cite_start]explanationImportant: "コンピュータで扱われるファイルを用途別に分類すると、プログラムファイルとデータファイルに分けられます。データファイルは、さらにマスタファイルとトランザクションファイルに分けられます。[cite: 10]",
    explanationDetails: [
      [cite_start]"ア ×：マスタファイルはデータファイルの１つです。プログラムファイルはソフトウェア自体を含んでいます。[cite: 12]",
      [cite_start]"イ ○：トランザクションファイルは取引を記録するファイルであるため、取引が発生する度にデータが追加されたり更新されます。[cite: 14]",
      [cite_start]"ウ ○：テキストファイルは、テキストエディタで開き、編集することができます。[cite: 16]",
      [cite_start]"エ ○：画像や音声などのデータは、バイナリファイルとして保存されます。[cite: 18]"
    ]
  },
  {
    id: 5,
    title: "問題 5 バイナリファイル2",
    question: "音声・動画ファイルに関する記述として、最も不適切なものはどれか。",
    tableType: "binary",
    options: [
      { id: "ア", text: "WAVは、音声や音楽を扱うデータ形式で、通常はデータの圧縮を行わずに保存する。" },
      { id: "イ", text: "MPEGは、動画を扱うデータ形式で、データの圧縮を行って保存する。" },
      { id: "ウ", text: "MP3は、動画を扱うデータ形式で、データの圧縮を行って保存する。" },
      { id: "エ", text: "動画圧縮形式の中には、静止画の技術を応用しているものもある。" }
    ],
    answer: "ウ",
    [cite_start]explanationImportant: "代表的な音声・動画ファイルにはWAV、MP3、MPEGなどがあります。[cite: 78]",
    explanationDetails: [
      [cite_start]"ア ○：WAVは音声データを扱い、通常は圧縮しません。[cite: 80]",
      [cite_start]"イ ○：MPEGは動画ファイル形式で、圧縮して保存します。[cite: 82]",
      [cite_start]"ウ ×：MP3は、音声ファイルの形式です。データを圧縮して保存します。[cite: 84]",
      [cite_start]"エ ○：静止画技術を応用したMotion-JPEGなどがあります。[cite: 86]"
    ]
  },
  {
    id: 9,
    title: "問題 9 リレーショナルデータベース",
    question: "リレーショナルデータベースに関する記述として、最も不適切なものはどれか。",
    tableType: "relational",
    options: [
      { id: "ア", text: "リレーショナルデータベースを管理するソフトウェアをRDBMSと言う。" },
      { id: "イ", text: "表の中で、その列の値によって1件のデータが特定できる列のことを主キーと言う。" },
      { id: "ウ", text: "表の間の関係のことをリレーションと言い、リレーションの参照先の列のことを外部キーと言う。" },
      { id: "エ", text: "ビューはデータを参照することができるが、実データは格納されていない。" }
    ],
    answer: "ウ",
    [cite_start]explanationImportant: "リレーションは、参照元の表のある列から、参照先の表のある列を参照するものです。リレーションの参照元の列のことを外部キーと呼びます。[cite: 142]",
    explanationDetails: [
      [cite_start]"ア ○：リレーショナルデータベース管理システムはRDBMSと言います。[cite: 144]",
      [cite_start]"イ ○：主キーに関する正しい記述です。[cite: 146]",
      [cite_start]"ウ ×：外部キーはリレーションの「参照元」の列のことを言います。[cite: 148]",
      [cite_start]"エ ○：ビューは仮想表でありデータは格納されていません。[cite: 150]"
    ]
  },
  {
    id: 13,
    title: "問題 13 SQL2",
    question: "下表の販売履歴表に対して、次のSQL文を実行した場合、どの結果を得るか。",
    tableType: "sql",
    options: [
      { id: "ア", text: "テレビ: 200,000, エアコン: 450,000" },
      { id: "イ", text: "テレビ: 600,000, エアコン: 900,000" },
      { id: "ウ", text: "テレビ: 300,000, エアコン: 600,000" },
      { id: "エ", text: "テレビ: 100,000, エアコン: 300,000" }
    ],
    answer: "ア",
    [cite_start]explanationImportant: "SQLのSELECT文では、「GROUP BY」句と集計関数を用いることで、合計や平均値などを求めることができます。[cite: 210]",
    explanationDetails: [
      [cite_start]"ア ○：AVGは平均を求める集計関数です。テレビは(100,000+300,000+200,000)/3 = 200,000。エアコンは(300,000+600,000)/2 = 450,000となります。[cite: 212, 213]"
    ]
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = quizData[currentIndex];

  const handleOptionClick = (optionId) => {
    if (showExplanation) return;
    setSelectedAnswer(optionId);
    setShowExplanation(true);
    if (optionId === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  // 固有のUI（表など）をレンダリングする関数
  const renderSpecialUI = (type) => {
    if (type === "sql") {
      return (
        <div className="mb-4">
          <code className="block bg-gray-800 text-green-400 p-2 rounded mb-3 text-sm">
            SELECT 商品名,AVG(販売金額) FROM 販売履歴表 GROUP BY 商品名;
          </code>
          <div className="overflow-x-auto">
            <table className="border-collapse border border-gray-400 text-sm bg-white mx-auto min-w-[300px]">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-gray-400 p-2">販売コード</th>
                  <th className="border border-gray-400 p-2">商品名</th>
                  <th className="border border-gray-400 p-2">販売金額</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-400 p-2 text-center">101</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-right">100,000</td></tr>
                <tr><td className="border border-gray-400 p-2 text-center">102</td><td className="border border-gray-400 p-2 text-center">エアコン</td><td className="border border-gray-400 p-2 text-right">300,000</td></tr>
                <tr><td className="border border-gray-400 p-2 text-center">103</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-right">300,000</td></tr>
                <tr><td className="border border-gray-400 p-2 text-center">104</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-right">200,000</td></tr>
                <tr><td className="border border-gray-400 p-2 text-center">104</td><td className="border border-gray-400 p-2 text-center">エアコン</td><td className="border border-gray-400 p-2 text-right">600,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    return null;
  };

  // 解説用の図表をレンダリングする関数
  const renderExplanationTable = (type) => {
    if (type === "binary") {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-400 text-sm bg-white">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-gray-400 p-2">種類</th>
                <th className="border border-gray-400 p-2">形式</th>
                <th className="border border-gray-400 p-2">圧縮</th>
              </tr>
            </thead>
            <tbody>
              <tr><td rowSpan="2" className="border border-gray-400 p-2 text-center font-bold">画像</td><td className="border border-gray-400 p-2 text-center">BMP</td><td className="border border-gray-400 p-2 text-center">なし</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">JPEG / GIF</td><td className="border border-gray-400 p-2 text-center text-red-600 font-bold">あり</td></tr>
              <tr><td rowSpan="2" className="border border-gray-400 p-2 text-center font-bold">音声</td><td className="border border-gray-400 p-2 text-center">WAV</td><td className="border border-gray-400 p-2 text-center">なし</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">MP3</td><td className="border border-gray-400 p-2 text-center text-red-600 font-bold">あり</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center font-bold">動画</td><td className="border border-gray-400 p-2 text-center">MPEG</td><td className="border border-gray-400 p-2 text-center text-red-600 font-bold">あり</td></tr>
            </tbody>
          </table>
        </div>
      );
    }
    
    if (type === "relational") {
      return (
        <div className="my-4 p-4 bg-gray-50 rounded-lg overflow-x-auto border border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <div className="font-bold text-center text-sm mb-1">受注表</div>
              <table className="border-collapse border border-gray-400 text-xs bg-white">
                <thead><tr className="bg-orange-100"><th className="border border-gray-400 p-1 text-red-600">主キー</th><th className="border border-gray-400 p-1 text-blue-600">外部キー</th></tr></thead>
                <tbody>
                  <tr><td className="border border-gray-400 p-1 text-center">1001</td><td className="border border-gray-400 p-1 text-center">102</td></tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center text-gray-400">→参照→</div>
            <div>
              <div className="font-bold text-center text-sm mb-1">顧客表</div>
              <table className="border-collapse border border-gray-400 text-xs bg-white">
                <thead><tr className="bg-yellow-100"><th className="border border-gray-400 p-1 text-red-600">主キー</th><th className="border border-gray-400 p-1">顧客名</th></tr></thead>
                <tbody>
                  <tr><td className="border border-gray-400 p-1 text-center">102</td><td className="border border-gray-400 p-1 text-center">鈴木</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">学習完了！</h1>
          <p className="text-xl mb-8 text-gray-700">
            正答率: <span className="font-bold text-blue-600 text-2xl ml-2">{score} / {quizData.length}</span>
          </p>
          <button
            onClick={handleRestart}
            className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
          >
            <RotateCcw className="mr-2" size={20} /> 最初からやり直す
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">4-2 ファイルとデータベース</h1>
          <div className="text-sm font-bold text-blue-600 bg-blue-50 py-1.5 px-4 rounded-full shadow-sm border border-blue-100">
            {currentIndex + 1} / {quizData.length}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="bg-blue-50/50 border-b border-gray-100 p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">{currentQuestion.title}</h2>
            <p className="text-gray-800 leading-relaxed font-medium mb-4">
              {currentQuestion.question}
            </p>
            {renderSpecialUI(currentQuestion.tableType)}
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.answer;
                const showStatus = showExplanation && (isSelected || isCorrect);
                
                let buttonStyle = "border-gray-200 hover:border-blue-400 hover:bg-blue-50 bg-white";
                if (showExplanation) {
                  if (isCorrect) {
                    buttonStyle = "border-green-500 bg-green-50 text-green-900";
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "border-red-500 bg-red-50 text-red-900";
                  } else {
                    buttonStyle = "border-gray-100 bg-gray-50 text-gray-400 opacity-60";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3 ${buttonStyle}`}
                  >
                    <span className="font-bold min-w-[1.5rem] mt-0.5">{option.id}</span>
                    <span className="flex-1 leading-relaxed">{option.text}</span>
                    {showStatus && (
                      <div className="flex-shrink-0 mt-0.5">
                        {isCorrect ? (
                          <Check className="text-green-600" size={22} />
                        ) : (
                          <X className="text-red-600" size={22} />
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {showExplanation && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${selectedAnswer === currentQuestion.answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {selectedAnswer === currentQuestion.answer ? '正解！' : '不正解'}
                </span>
                <span className="font-bold text-gray-700">正答: {currentQuestion.answer}</span>
              </div>
              
              <div className="bg-yellow-50/50 border-l-4 border-yellow-400 p-5 mb-6 rounded-r-lg">
                <h3 className="font-bold text-yellow-800 mb-2">💡 ここが重要</h3>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {currentQuestion.explanationImportant}
                </p>
                {renderExplanationTable(currentQuestion.tableType)}
              </div>

              <div className="space-y-3 bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm mb-3">選択肢の解説</h3>
                {currentQuestion.explanationDetails.map((detail, idx) => (
                  <p key={`detail-${idx}`} className="text-sm text-gray-700 leading-relaxed flex items-start">
                    <span className="mr-2 text-gray-400">•</span>
                    <span>{detail}</span>
                  </p>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold shadow-sm"
                >
                  {currentIndex < quizData.length - 1 ? '次の問題へ' : '結果を見る'}
                  <ChevronRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}