// npm install lucide-react
import { useState } from 'react';
import { Check, X, ChevronRight, RotateCcw } from 'lucide-react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // データベース（問題集のデータ）
  const quizData = [
    {
      id: 1,
      [cite_start]title: "問題 1 ファイルの分類 [cite: 2]",
      [cite_start]question: "コンピュータのファイルに関する記述として、最も不適切なものはどれか。[cite: 3]",
      options: [
        [cite_start]{ id: "ア", text: "マスタファイルは、プログラムファイルの１つであり、商品情報を管理する商品マスタや得意先情報を管理する得意先マスタなど、台帳のような情報を格納する。[cite: 4]" },
        [cite_start]{ id: "イ", text: "トランザクションファイルとは、売上履歴のような取引を記録し、取引の度にデータが追加・更新される。[cite: 5]" },
        [cite_start]{ id: "ウ", text: "テキストファイルは、文字データが格納されており、テキストエディタで開いて編集することができる。[cite: 6]" },
        [cite_start]{ id: "エ", text: "バイナリファイルは、2進数で表現されたデータを格納しているファイルであり、画像や音声などのデータはバイナリファイルとして保存されている。[cite: 7]" }
      ],
      answer: "ア",
      [cite_start]explanationImportant: "コンピュータで扱われるファイルを用途別に分類すると、プログラムファイルとデータファイルに分けられます。データファイルは、さらにマスタファイルとトランザクションファイルに分けられます。[cite: 10]",
      explanationDetails: [
        [cite_start]"ア ×：マスタファイルはデータファイルの１つです。プログラムファイルはソフトウェア自体を含んでいます。[cite: 11, 12]",
        [cite_start]"イ ○：トランザクションファイルは取引を記録するファイルであるため、取引が発生する度にデータが追加されたり更新されます。[cite: 13, 14]",
        [cite_start]"ウ ○：テキストファイルは、テキストエディタで開き、編集することができます。[cite: 15, 16]",
        [cite_start]"エ ○：画像や音声などのデータは、バイナリファイルとして保存されます。[cite: 17, 18]"
      ]
    },
    {
      id: 5,
      [cite_start]title: "問題 5 バイナリファイル2 [cite: 70]",
      [cite_start]question: "音声・動画ファイルに関する記述として、最も不適切なものはどれか。[cite: 71]",
      options: [
        [cite_start]{ id: "ア", text: "WAVは、音声や音楽を扱うデータ形式で、通常はデータの圧縮を行わずに保存する。[cite: 72]" },
        [cite_start]{ id: "イ", text: "MPEGは、動画を扱うデータ形式で、データの圧縮を行って保存する。[cite: 73]" },
        [cite_start]{ id: "ウ", text: "MP3は、動画を扱うデータ形式で、データの圧縮を行って保存する。[cite: 74]" },
        [cite_start]{ id: "エ", text: "動画圧縮形式の中には、静止画の技術を応用しているものもある。[cite: 75]" }
      ],
      answer: "ウ",
      [cite_start]explanationImportant: "代表的な音声・動画ファイルにはWAV、MP3、MPEGなどがあります。[cite: 78]",
      explanationTable: (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-400 text-sm bg-white">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-gray-400 p-2">種類</th>
                <th className="border border-gray-400 p-2">形式</th>
                <th className="border border-gray-400 p-2">圧縮</th>
                <th className="border border-gray-400 p-2">特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr><td rowSpan="5" className="border border-gray-400 p-2 text-center">画像</td><td className="border border-gray-400 p-2 text-center">BMP</td><td className="border border-gray-400 p-2 text-center">なし</td><td className="border border-gray-400 p-2">Windowsで使われる画像ファイル</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">GIF</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">256色以下で画像を保存</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">JPEG</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">フルカラーに対応した形式</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">PNG</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">圧縮率が高い割に画質の劣化が少ない</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">TIFF</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">記録形式の異なる様々な画像を保存できる</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">動画</td><td className="border border-gray-400 p-2 text-center">MPEG</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">動画データを圧縮して保存</td></tr>
              <tr><td rowSpan="2" className="border border-gray-400 p-2 text-center">音声</td><td className="border border-gray-400 p-2 text-center">WAV</td><td className="border border-gray-400 p-2 text-center">なし</td><td className="border border-gray-400 p-2">Windowsで使われる音声ファイル</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">MP3</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">音声を圧縮して格納</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">画像/動画/音声</td><td className="border border-gray-400 p-2 text-center">MP4</td><td className="border border-gray-400 p-2 text-center">あり</td><td className="border border-gray-400 p-2">小さなファイルサイズで保存できる</td></tr>
            </tbody>
          </table>
          [cite_start]<p className="text-xs text-gray-500 mt-1">※主なバイナリファイルの特徴 [cite: 78]</p>
        </div>
      ),
      explanationDetails: [
        [cite_start]"ウ ×：MP3は、音声ファイルの形式です。データを圧縮して保存します。[cite: 83, 84]"
      ]
    },
    {
      id: 9,
      [cite_start]title: "問題 9 リレーショナルデータベース [cite: 134]",
      [cite_start]question: "リレーショナルデータベースに関する記述として、最も不適切なものはどれか。[cite: 135]",
      options: [
        [cite_start]{ id: "ア", text: "リレーショナルデータベースを管理するソフトウェアをRDBMSと言う。[cite: 136]" },
        [cite_start]{ id: "イ", text: "表の中で、その列の値によって1件のデータが特定できる列のことを主キーと言う。[cite: 137]" },
        [cite_start]{ id: "ウ", text: "表の間の関係のことをリレーションと言い、リレーションの参照先の列のことを外部キーと言う。[cite: 138]" },
        [cite_start]{ id: "エ", text: "ビューはデータを参照することができるが、実データは格納されていない。[cite: 139]" }
      ],
      answer: "ウ",
      [cite_start]explanationImportant: "リレーションは、参照元の表のある列から、参照先の表のある列を参照するものです。リレーションの参照元の列のことを外部キーと呼びます。[cite: 142]",
      explanationTable: (
        <div className="my-4 p-4 bg-gray-50 rounded-lg overflow-x-auto border border-gray-200">
          [cite_start]<div className="font-bold text-center mb-4 text-lg">◆リレーショナルデータベース [cite: 142]</div>
          <div className="flex flex-wrap gap-8 justify-center">
            <div>
              <div className="font-bold text-center">受注表</div>
              <table className="border-collapse border border-gray-400 text-sm bg-white mb-2">
                <thead><tr className="bg-orange-100"><th className="border border-gray-400 p-1 text-red-600">主キー(受注No)</th><th className="border border-gray-400 p-1">受注日</th><th className="border border-gray-400 p-1 text-red-600">外部キー(顧客No)</th></tr></thead>
                <tbody>
                  <tr><td className="border border-gray-400 p-1 text-center">1001</td><td className="border border-gray-400 p-1 text-center">4月1日</td><td className="border border-gray-400 p-1 text-center">102</td></tr>
                  <tr><td className="border border-gray-400 p-1 text-center">1002</td><td className="border border-gray-400 p-1 text-center">4月1日</td><td className="border border-gray-400 p-1 text-center">103</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="font-bold text-center">顧客表</div>
              <table className="border-collapse border border-gray-400 text-sm bg-white mb-2">
                <thead><tr className="bg-yellow-100"><th className="border border-gray-400 p-1">顧客No</th><th className="border border-gray-400 p-1">顧客名</th><th className="border border-gray-400 p-1">電話番号</th></tr></thead>
                <tbody>
                  <tr><td className="border border-gray-400 p-1 text-center">101</td><td className="border border-gray-400 p-1 text-center">佐藤</td><td className="border border-gray-400 p-1 text-center">06...</td></tr>
                  <tr><td className="border border-gray-400 p-1 text-center">102</td><td className="border border-gray-400 p-1 text-center">鈴木</td><td className="border border-gray-400 p-1 text-center">03...</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
      explanationDetails: [
        [cite_start]"ウ ×：外部キーはリレーションの「参照元」の列のことを言います。[cite: 147, 148]"
      ]
    },
    {
      id: 13,
      [cite_start]title: "問題 13 SQL2 [cite: 200]",
      [cite_start]question: "下表の販売履歴表に対して、次のSQL文を実行した場合、どの結果を得るか。[cite: 201]",
      questionExtra: (
        <div className="mb-4">
          [cite_start]<code className="block bg-gray-800 text-green-400 p-2 rounded mb-3">SELECT 商品名,AVG(販売金額) FROM 販売履歴表 GROUP BY 商品名; [cite: 202]</code>
          <table className="border-collapse border border-gray-400 text-sm bg-white mx-auto">
            <thead>
              <tr className="bg-orange-100">
                <th className="border border-gray-400 p-2">販売コード</th>
                <th className="border border-gray-400 p-2">商品名</th>
                <th className="border border-gray-400 p-2">販売日</th>
                <th className="border border-gray-400 p-2">販売金額</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-400 p-2 text-center">101</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-center">2020/3/5</td><td className="border border-gray-400 p-2 text-right">100,000</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">102</td><td className="border border-gray-400 p-2 text-center">エアコン</td><td className="border border-gray-400 p-2 text-center">2020/3/5</td><td className="border border-gray-400 p-2 text-right">300,000</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">103</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-center">2020/3/8</td><td className="border border-gray-400 p-2 text-right">300,000</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">104</td><td className="border border-gray-400 p-2 text-center">テレビ</td><td className="border border-gray-400 p-2 text-center">2020/3/9</td><td className="border border-gray-400 p-2 text-right">200,000</td></tr>
              <tr><td className="border border-gray-400 p-2 text-center">104</td><td className="border border-gray-400 p-2 text-center">エアコン</td><td className="border border-gray-400 p-2 text-center">2020/3/9</td><td className="border border-gray-400 p-2 text-right">600,000</td></tr>
            </tbody>
          </table>
        </div>
      ),
      options: [
        [cite_start]{ id: "ア", text: "テレビ: 200,000, エアコン: 450,000 [cite: 204]" },
        [cite_start]{ id: "イ", text: "テレビ: 600,000, エアコン: 900,000 [cite: 205]" },
        [cite_start]{ id: "ウ", text: "テレビ: 300,000, エアコン: 600,000 [cite: 206]" },
        [cite_start]{ id: "エ", text: "テレビ: 100,000, エアコン: 300,000 [cite: 207]" }
      ],
      answer: "ア",
      [cite_start]explanationImportant: "SQLのSELECT文では、「GROUP BY」句と集計関数を用いることで、合計や平均値などを求めることができます。[cite: 210]",
      explanationDetails: [
        [cite_start]"ア ○：AVGは平均を求める集計関数です。テレビは (100000+300000+200000)/3 = 200,000。エアコンは (300000+600000)/2 = 450,000 となります。[cite: 212, 213]"
      ]
    }
  ];

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

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">学習完了！</h1>
          <p className="text-xl mb-8">
            正答率: <span className="font-bold text-blue-600">{score} / {quizData.length}</span>
          </p>
          <button
            onClick={handleRestart}
            className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
          >
            <RotateCcw className="mr-2" /> 最初からやり直す
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">スマート問題集：4-2 ファイルとデータベース</h1>
          <div className="text-sm font-medium text-gray-500 bg-white py-1 px-3 rounded-full shadow-sm">
            問題 {currentIndex + 1} / {quizData.length}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
          <div className="bg-blue-50 border-b border-blue-100 p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-2">{currentQuestion.title}</h2>
            <p className="text-gray-800 leading-relaxed font-medium">
              {currentQuestion.question}
            </p>
            {currentQuestion.questionExtra && (
              <div className="mt-4">
                {currentQuestion.questionExtra}
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrect = option.id === currentQuestion.answer;
                const showStatus = showExplanation && (isSelected || isCorrect);
                
                let buttonStyle = "border-gray-300 hover:border-blue-500 hover:bg-blue-50 bg-white";
                if (showExplanation) {
                  if (isCorrect) {
                    buttonStyle = "border-green-500 bg-green-50 text-green-900";
                  } else if (isSelected && !isCorrect) {
                    buttonStyle = "border-red-500 bg-red-50 text-red-900";
                  } else {
                    buttonStyle = "border-gray-200 bg-gray-50 text-gray-400 opacity-70";
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.id)}
                    disabled={showExplanation}
                    className={`w-full text-left p-4 rounded-lg border-2 transition flex items-start gap-3 ${buttonStyle}`}
                  >
                    <span className="font-bold min-w-[1.5rem] mt-0.5">{option.id}</span>
                    <span className="flex-1 leading-relaxed">{option.text}</span>
                    {showStatus && (
                      <div className="flex-shrink-0 mt-0.5">
                        {isCorrect ? (
                          <Check className="text-green-600" size={24} />
                        ) : (
                          <X className="text-red-600" size={24} />
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${selectedAnswer === currentQuestion.answer ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {selectedAnswer === currentQuestion.answer ? '正解！' : '不正解'}
                </span>
                <span className="font-bold text-gray-700">正答: {currentQuestion.answer}</span>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-r-lg">
                <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                  ここが重要
                </h3>
                <p className="text-sm text-gray-800 leading-relaxed mb-4">
                  {currentQuestion.explanationImportant}
                </p>
                {currentQuestion.explanationTable && (
                  <div>{currentQuestion.explanationTable}</div>
                )}
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 border-b pb-2">選択肢の解説</h3>
                {currentQuestion.explanationDetails.map((detail, idx) => (
                  <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-bold"
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