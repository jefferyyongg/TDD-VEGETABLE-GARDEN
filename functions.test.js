const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop, getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./functions");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
            wind: {
            low: 0,
            medium: -30,
            high: -60,
            },
        },
        };
        
        const environmentFactors = {
        sun: "high",
        wind: "low"
        };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(4.5);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };
            
            const environmentFactors = {
            sun: "high",
            wind: "low"
            };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(45);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };

        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };
            const environmentFactors = {
                sun: "high",
                wind: "low"
            };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2},
        ];
        expect(getTotalYield({ crops, environmentFactors })).toBe(34.5);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("calculate the cost for a crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salePrice: 1.5,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };
            
            const environmentFactors = {
            sun: "high",
            wind: "low"
            };
        const crops = [
            { crop: corn, numCrops: 5 },
        ];
        expect(getCostsForCrop({ crops, environmentFactors })).toBe(22.5);
    });
});

describe("getRevenueForCrop", () => {
    test("calculate the revenue for a crop (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salePrice: 1.5,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };
            
            const environmentFactors = {
            sun: "high",
            wind: "low"
            };
        const crops = [
            { crop: corn, numCrops: 5 },
        ];
        expect(getRevenueForCrop({ crops, environmentFactors })).toBe(33.75);
    });
});

describe("getProfitForCrop", () => {
    test("calculate the profit for a crop (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salePrice: 1.5,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };
            
            const environmentFactors = {
            sun: "high",
            wind: "low"
            };
        const crops = [
            { crop: corn, numCrops: 5 },
        ];
        expect(getProfitForCrop({ crops, environmentFactors })).toBe(11.25);
    });
});

describe("getTotalProfit", () => {
    test.only("calculate the profit for multiple crops (without environmental factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            salePrice: 1.5,
            factor: {
                sun: {
                low: -50,
                medium: 0,
                high: 50,
                },
                wind: {
                low: 0,
                medium: -30,
                high: -60,
                },
            },
            };

            const pumpkin = {
                name: "pumpkin",
                yield: 4,
                salePrice: 3,
                factor: {
                    sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                    },
                    wind: {
                    low: 0,
                    medium: -30,
                    high: -60,
                    },
                },
                };
            
            const environmentFactors = {
            sun: "high",
            wind: "low"
            };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 3 },
        ];
        expect(getTotalProfit({ crops, environmentFactors })).toBe(47.25);
    });
});
