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
						? 'border-message-success-background bg-message-success-foreground text-message-success-background'
						: type === 'warn'
						? 'bg-message-warn-foreground border-message-warn-background text-message-warn-background'
						: type === 'error'
						? 'bg-message-warn-foreground border-message-error-background text-message-error-background'
						: 'bg-message-info-foreground border-message-info-background text-message-info-background'
				} border-[1px] p-2 rounded-md flex items-start gap-x-2 animate-in fade-in zoom-in`}
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
