import React from 'react';

interface InputIconProps {
  icon?(): JSX.Element;
  placeholder: string;
  name: string;
  id: string;
  value: string;
  children?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputIcon(props: InputIconProps) {
  return (
    <div>
      <div className="selection:bg-primary-100 shadow-sm selection:text-primary-700 flex items-center h-11 py-0.5 border border-gray-200 rounded-xl overflow-hidden transition duration-200 focus-within:shadow-none focus-within:outline-none focus-within:ring focus-within:ring-primary-100 focus-within:border-primary-300">
        <span className="flex items-center h-12 px-4 border-r border-gray-200 bg-gray-50">
          {props.icon ? props.icon() : null}
        </span>
        <input
          type="text"
          className="w-full border-0 form-text focus:outline-none focus:ring-0"
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}
