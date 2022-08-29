import create, { StoreApi, UseBoundStore } from 'zustand'

export interface Store {
    uploadingImage: boolean
    pageLoading: boolean
    setUploadingImage: (isUploading: boolean) => void
    setPageLoading: (isLoading: boolean) => void
}

const useStore: UseBoundStore<StoreApi<Store>> = create<Store>((set) => ({
    uploadingImage: false,
    pageLoading: false,
    setUploadingImage: (isUploading) => set((state) => ({ ...state, uploadingImage: isUploading })),
    setPageLoading: (isLoading) => set((state) => ({ ...state, pageLoading: isLoading })),
}))

export default useStore
