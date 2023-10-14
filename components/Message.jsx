import React from 'react';
import {
    AiFillAlert,
	AiFillCheckCircle,
	AiFillInfoCircle,
	AiFillWarning,
} from 'react-icons/ai';

const Message = ({ children, message, type, display }) => {
	if (display) {
		return (
			<div
				className={`${
					type === 'success'
						? 'border-teal-500 bg-teal-300/80 text-teal-900'
						: type === 'warn'
						? 'bg-yellow-200 border-yellow-600 text-yellow-950'
						: type === 'error'
						? 'bg-red-300/80 border-red-500 text-red-950'
						: 'bg-blue-300/80 border-blue-500 text-blue-950'
				} border-[1px] p-2 rounded flex items-start gap-x-2`}
			>
				{type === 'success' ? (
					<AiFillCheckCircle className="w-5 h-5" />
				) : type === 'warn' ? (
					<AiFillWarning className="w-5 h-5" />
				) : type === 'error' ? (
					<AiFillAlert className="w-5 h-5" />
				) : (
					<AiFillInfoCircle className="w-5 h-5" />
				)}
				<div>
					<h2 className="font-semibold text-sm ">{message}</h2>
					<p className="text-xs font-medium">{children}</p>
				</div>
			</div>
		);
	}
};

export default Message;
