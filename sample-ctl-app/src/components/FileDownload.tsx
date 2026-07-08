import React, { useState } from 'react';
import { Button, Spinner } from '@fluentui/react-components';
import { ArrowDownloadRegular } from '@fluentui/react-icons';

export const ExternalLogDownload: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // 外部ストレージサーバーのURL（適切なURLに置き換えてください）
  const logUrl = 'http://localhost:5001/storage/800111';
  const saveFileName = '800111.log';

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // 1. 外部サーバーからログファイルを取得
      const response = await fetch(logUrl, {
        method: 'GET',
        // 必要に応じて認証ヘッダなどを追加
        // headers: { 'Authorization': 'Bearer YOUR_TOKEN' }
      });

      if (!response.ok) {
        throw new Error(`サーバーエラー: ${response.status}`);
      }

      // 2. レスポンスを Blob (プレーンテキストとして) 取得
      const blob = await response.blob();
      
      // 3. ブラウザでダウンロードできる一時的なURLを生成
      const blobUrl = URL.createObjectURL(blob);

      // 4. 不可視の <a> タグを作ってダウンロードを実行
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = saveFileName; // 保存時のファイル名
      document.body.appendChild(link);
      link.click();

      // 5. クリーンアップ
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('ログのダウンロードに失敗しました:', error);
      alert('ファイルのダウンロードに失敗しました。');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button
      appearance="primary"
      onClick={handleDownload}
      disabled={isDownloading}
      icon={isDownloading ? <Spinner size="tiny" /> : <ArrowDownloadRegular />}
    >
      {isDownloading ? 'ダウンロード中...' : 'ログファイルをダウンロード'}
    </Button>
  );
};
