import {type DeepRequired, type FieldError, type FieldErrorsImpl, type Merge} from 'react-hook-form';

export const errorInputNarrowing = (error: FieldError | Merge<FieldError, FieldErrorsImpl<DeepRequired<any>[string]>> | undefined): error is FieldError => {
	if (error?.type && 'message' in error) {
		return true;
	}

	return false;
};
