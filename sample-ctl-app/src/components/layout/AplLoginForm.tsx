// ApiLoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Field, Spinner, MessageBar, MessageBarBody } from '@fluentui/react-components';

interface ApiLoginFormProps {
  onLoginSuccess: (token: string, user:string) => void;
}

export const ApiLoginForm: React.FC<ApiLoginFormProps> = ({ onLoginSuccess }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
/*       const response = await fetch('https://example.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'ログインに失敗しました。');
      }
 */
      // 認証成功：状態を更新してダッシュボードへ遷移
      let data = {token:"ERROR",user:id}
     if(id !== "0000") {
        data = { token: "success", user:id }
        onLoginSuccess(data.token, data.user);
        navigate('/', { replace: true });
      } else {
         throw new Error( 'ログインに失敗しました。');
      }

    } catch (error: any) {
      setApiError(error.message || '通信エラーが発生しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '0 20px' }}>
      {apiError && (
        <MessageBar intent="error" style={{ marginBottom: '16px' }}>
          <MessageBarBody>{apiError}</MessageBarBody>
        </MessageBar>
      )}
      <form onSubmit={handleSubmit}>
        <Field label="ユーザID" style={{ marginBottom: '16px' }}>
          <Input type="text" required disabled={isLoading} value={id} onChange={(e, data) => setId(data.value)} />
        </Field>
        <Field label="パスワード" style={{ marginBottom: '24px' }}>
          <Input type="password" required disabled={isLoading} value={password} onChange={(e, data) => setPassword(data.value)} />
        </Field>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Button type="submit" appearance="primary" disabled={isLoading}>ログイン</Button>
          {isLoading && <Spinner size="tiny" label="認証中..." />}
        </div>
      </form>
    </div>
  );
};
