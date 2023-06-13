export const showAlert=(message,severity,detail,ref)=>{
    return ref.current.show({severity,summary:message,detail})
}