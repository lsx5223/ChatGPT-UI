import { Plugin, PluginList } from '@/types/plugin';
import { useTranslation } from 'next-i18next';
import { FC, useEffect, useRef } from 'react';

interface Props {
  plugin: Plugin | null;
  onPluginChange: (plugin: Plugin) => void;
}

export const PluginSelect: FC<Props> = ({ plugin, onPluginChange }) => {
  const { t } = useTranslation('chat');

  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.focus();
    }
  }, []);


};
