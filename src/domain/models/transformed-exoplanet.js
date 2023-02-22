class TransformedExoplanetModel {
    /**
     * @param {{
     * name: string;
     * orbitsInDays: number;
     * size: number;
     * status: string;
     * }} initData 
     */
    constructor(initData) {
        this.name = initData?.name;
        this.orbitsInDays = initData?.orbitsInDays;
        this.size = initData?.size;
        this.status = initData?.status;
    }
};

export {
    TransformedExoplanetModel
};
