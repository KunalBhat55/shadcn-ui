import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  

function Alert({ triggerText, title, description, cancelText, actionText, onCancel, onAction }) {
    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger>{triggerText}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>
                            {description}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
                        <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}

// Alert.defaultProps = {
//     triggerText: 'Open',
//     title: 'Are you absolutely sure?',
//     description: 'This action cannot be undone. This will permanently delete your account and remove your data from our servers.',
//     cancelText: 'Cancel',
//     actionText: 'Continue',
//     onCancel: () => {},
//     onAction: () => {},
// };

export default Alert;
